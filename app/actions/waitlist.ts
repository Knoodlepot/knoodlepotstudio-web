"use server";

import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export type WaitlistResult =
  | { success: true; alreadyRegistered?: boolean }
  | { success: false; error: string };

export async function joinWaitlist(formData: FormData): Promise<WaitlistResult> {
  const email = (formData.get("email") as string | null)?.trim().toLowerCase() ?? "";
  const appSlug = (formData.get("appSlug") as string | null) ?? "";
  const appName = (formData.get("appName") as string | null) ?? "";

  /* ── Validate email ── */
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  if (!appSlug || !appName) {
    return { success: false, error: "Something went wrong. Please try again." };
  }

  /*
   * Use a deterministic document ID so we get natural duplicate prevention
   * without needing a composite Firestore index.
   * Format: "<appSlug>__<email with special chars replaced>"
   */
  const safeEmail = email.replace(/[^a-zA-Z0-9]/g, "_");
  const docId = `${appSlug}__${safeEmail}`;
  const docRef = doc(db, "waitlist", docId);

  try {
    const existing = await getDoc(docRef);

    if (existing.exists()) {
      /* Already on the list — treat as success so we don't leak info */
      return { success: true, alreadyRegistered: true };
    }

    await setDoc(docRef, {
      email,
      appSlug,
      appName,
      createdAt: serverTimestamp(),
    });

    return { success: true };
  } catch (err) {
    console.error("[waitlist] Firestore write failed:", err);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}

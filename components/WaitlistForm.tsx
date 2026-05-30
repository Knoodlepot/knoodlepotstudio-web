"use client";

import { useActionState } from "react";
import { joinWaitlist, type WaitlistResult } from "@/app/actions/waitlist";

interface Props {
  appSlug: string;
  appName: string;
}

const initialState: WaitlistResult | null = null;

export default function WaitlistForm({ appSlug, appName }: Props) {
  const [result, formAction, isPending] = useActionState(
    async (_prev: WaitlistResult | null, formData: FormData) => {
      return joinWaitlist(formData);
    },
    initialState
  );

  const succeeded = result?.success === true;

  return (
    <div style={{ marginTop: "1.5rem" }}>
      {succeeded ? (
        <p
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "1rem",
            color: "var(--gold)",
            margin: 0,
            lineHeight: 1.7,
          }}
        >
          {result.alreadyRegistered
            ? "You're already on the list — we'll be in touch."
            : "You're on the list. We'll let you know the moment it's ready."}
        </p>
      ) : (
        <form
          action={formAction}
          style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "flex-start" }}
        >
          {/* Hidden fields carry the app identity to the server */}
          <input type="hidden" name="appSlug" value={appSlug} />
          <input type="hidden" name="appName" value={appName} />

          <input
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            disabled={isPending}
            style={{
              flex: 1,
              minWidth: "220px",
              maxWidth: "360px",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "1rem",
              padding: "0.7rem 1rem",
              borderRadius: 4,
              border: "1px solid rgba(200, 169, 81, 0.5)",
              background: "var(--surface)",
              color: "var(--text)",
              outline: "none",
              opacity: isPending ? 0.6 : 1,
            }}
          />

          <button
            type="submit"
            disabled={isPending}
            style={{
              fontFamily: "var(--font-cinzel), serif",
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "0.75rem 2rem",
              background: "var(--gold, #C8A951)",
              border: "none",
              borderRadius: 4,
              color: "#0A1628",
              fontWeight: 600,
              cursor: isPending ? "not-allowed" : "pointer",
              opacity: isPending ? 0.6 : 1,
              whiteSpace: "nowrap",
            }}
          >
            {isPending ? "Sending…" : "Notify me"}
          </button>

          {result?.success === false && (
            <p
              style={{
                width: "100%",
                fontFamily: "var(--font-playfair), serif",
                fontSize: "0.875rem",
                color: "#c0392b",
                margin: 0,
              }}
            >
              {result.error}
            </p>
          )}
        </form>
      )}

      <p
        style={{
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          fontSize: "0.8rem",
          lineHeight: 1.6,
          color: "var(--text-muted)",
          maxWidth: 420,
          marginTop: "0.75rem",
          opacity: 0.7,
        }}
      >
        One email when {appName} launches. Nothing else, ever.
      </p>
    </div>
  );
}

import { notFound } from "next/navigation";
import Link from "next/link";
import { apps, statusLabel, statusColour } from "@/lib/apps";
import { getAppDetail } from "@/lib/app-details";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const app = apps.find((a) => a.slug === slug);
  if (!app) return {};
  return {
    title: `${app.name} — Knoodlepot Studio`,
    description: app.description,
  };
}

const s = {
  page: { backgroundColor: "var(--bg)", minHeight: "100vh", color: "var(--text)" } as React.CSSProperties,
  back: { display: "inline-block", fontFamily: "var(--font-cinzel)", fontSize: "0.75rem", letterSpacing: "0.1em", color: "var(--gold)", textDecoration: "none", padding: "1.25rem 1.5rem 0", } as React.CSSProperties,
  container: { maxWidth: 760, margin: "0 auto", padding: "2rem 1.5rem 5rem" } as React.CSSProperties,
  badge: (status: string) => ({ display: "inline-block", fontSize: "0.65rem", fontFamily: "var(--font-cinzel)", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: statusColour[status as keyof typeof statusColour], background: `${statusColour[status as keyof typeof statusColour]}22`, border: `1px solid ${statusColour[status as keyof typeof statusColour]}44`, borderRadius: "4px", padding: "2px 8px", marginBottom: "1rem" }),
  name: { fontFamily: "var(--font-cinzel)", fontSize: "clamp(2rem, 6vw, 3rem)", fontWeight: 700, color: "var(--gold)", lineHeight: 1.15, marginBottom: "0.5rem" } as React.CSSProperties,
  tagline: { fontFamily: "var(--font-playfair)", fontStyle: "italic", fontSize: "1.1rem", color: "var(--text-muted)", marginBottom: "2rem" } as React.CSSProperties,
  rule: { height: "1px", background: "var(--border)", margin: "2rem 0" } as React.CSSProperties,
  intro: { fontFamily: "var(--font-playfair)", fontSize: "1.05rem", lineHeight: 1.85, color: "var(--text)", marginBottom: "1.25rem" } as React.CSSProperties,
  sectionHeading: { fontFamily: "var(--font-cinzel)", fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "var(--gold)", marginBottom: "0.75rem", marginTop: "2.5rem" } as React.CSSProperties,
  body: { fontFamily: "var(--font-playfair)", fontSize: "1rem", lineHeight: 1.8, color: "var(--text)", marginBottom: "1rem" } as React.CSSProperties,
  pricing: { fontFamily: "var(--font-playfair)", fontStyle: "italic", fontSize: "0.95rem", color: "var(--text-muted)", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "6px", padding: "1rem 1.25rem", marginTop: "2rem" } as React.CSSProperties,
  platform: { fontFamily: "var(--font-cinzel)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--text-muted)", marginBottom: "1.25rem" } as React.CSSProperties,
  playBtn: { display: "inline-block", marginTop: "0.5rem" } as React.CSSProperties,
  altLink: { display: "inline-block", fontFamily: "var(--font-cinzel)", fontSize: "0.7rem", letterSpacing: "0.05em", color: "var(--text-muted)", textDecoration: "none", borderBottom: "1px solid var(--border)", paddingBottom: "1px", marginTop: "0.5rem" } as React.CSSProperties,
  noDetail: { fontFamily: "var(--font-playfair)", fontStyle: "italic", color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.8 } as React.CSSProperties,
};

export default async function AppPage({ params }: Props) {
  const { slug } = await params;
  const app = apps.find((a) => a.slug === slug);
  if (!app) notFound();

  const detail = getAppDetail(slug);

  return (
    <div style={s.page}>
      <Link href="/#apps" style={s.back}>← The Collection</Link>

      <div style={s.container}>
        <div>
          <span style={s.badge(app.status)}>{statusLabel[app.status]}</span>
        </div>

        <h1 style={s.name}>{app.name}</h1>
        <p style={s.tagline}>{app.tagline}</p>
        <p style={s.platform}>{app.platform}</p>

        <div style={s.rule} />

        {detail ? (
          <>
            {detail.intro.map((para, i) => (
              <p key={i} style={s.intro}>{para}</p>
            ))}

            {detail.sections.map((section) => (
              <div key={section.title}>
                <h2 style={s.sectionHeading}>{section.title}</h2>
                {section.paragraphs.map((para, i) => (
                  <p key={i} style={s.body}>{para}</p>
                ))}
              </div>
            ))}

            {detail.pricing && (
              <p style={s.pricing}>{detail.pricing}</p>
            )}
          </>
        ) : (
          <p style={s.noDetail}>
            Full details for {app.name} are coming soon. In the meantime, you can read the short description below.
            <br /><br />
            {app.description}
          </p>
        )}

        {/* Privacy policy link */}
        {app.privacyPath && (
          <div style={{ marginTop: "2rem" }}>
            <Link
              href={app.privacyPath}
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: "var(--text-muted)",
                textDecoration: "none",
                borderBottom: "1px solid var(--border)",
                paddingBottom: "1px",
              }}
            >
              Privacy Policy
            </Link>
          </div>
        )}

        {/* Links */}
        {(app.playStoreUrl || app.alternativeToUrl || app.productHuntPostId) && (
          <>
            <div style={s.rule} />
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {app.playStoreUrl && (
                <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer" style={s.playBtn}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={`Get ${app.name} on Google Play`}
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    width={180}
                    height={69}
                    style={{ display: "block", marginLeft: "-8px" }}
                  />
                </a>
              )}
              {app.alternativeToUrl && (
                <a href={app.alternativeToUrl} target="_blank" rel="noopener noreferrer" style={s.altLink}>
                  View on AlternativeTo →
                </a>
              )}
              {app.productHuntPostId && app.productHuntSlug && (
                <a
                  href={`https://www.producthunt.com/products/${app.productHuntSlug}?utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-${app.productHuntSlug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={`${app.name} | Product Hunt`}
                    src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=${app.productHuntPostId}&theme=dark`}
                    width={200}
                    height={43}
                    style={{ display: "block" }}
                  />
                </a>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

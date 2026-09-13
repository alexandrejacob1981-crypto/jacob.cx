/*
  Bloc Magic UI Pro « hero-1 », adapté à Astro et au site jacob.cx.
  - Contenu passé en props (un hero par page, même structure).
  - Entrée en fondu par CSS (tw-animate-css) : le texte est visible sans JS,
    contrairement à l'original qui attendait l'hydratation.
  - Faisceaux lumineux (BorderBeam) en ambre, la seule couleur d'accent du site.
*/
import { ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { BorderBeam } from "@/components/ui/border-beam"
import { Button } from "@/components/ui/button"

export type HeroImage = {
  src: string
  srcSet?: string
  sizes?: string
  width?: number
  height?: number
  alt: string
}

export type HeroAction = { label: string; href: string; secondaire?: boolean }

/** Une ligne de relevé de mesure, affichée en mono sur la photo. */
export type HeroReleve = { label: string; valeur: string }

export interface HeroProps {
  /** Petite ligne en capitales au-dessus du titre. */
  eyebrow?: string
  /** Titre ; un tableau = un retour à la ligne entre chaque élément. */
  titre: string | string[]
  /** Paragraphe principal. */
  texte: string
  /** Phrase d'accroche ; la partie entre *astérisques* passe en ambre. */
  punch?: string
  /** Paragraphes complémentaires, plus discrets. */
  suite?: string[]
  actions: HeroAction[]
  image?: HeroImage
  releves?: HeroReleve[]
  /** Variante sur fond clair (page Particuliers). */
  clair?: boolean
}

const entree = "animate-in fade-in slide-in-from-bottom-6 fill-mode-both ease-out"

/**
 * Rendu de texte enrichi minimal.
 *
 * Le composant n'acceptait que des chaines plates : toutes les mises en relief
 * <strong> des ouvertures d'origine avaient disparu a la reprise du contenu.
 *
 *   *accent*  ->  <em> dans la couleur d'accent, sans italique
 *   **gras**  ->  <strong>
 */
function Riche({ texte }: { texte: string }) {
  const morceaux = texte.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean)
  return (
    <>
      {morceaux.map((m, i) => {
        if (m.startsWith("**") && m.endsWith("**"))
          return (
            <strong key={i} className="text-foreground font-semibold">
              {m.slice(2, -2)}
            </strong>
          )
        if (m.startsWith("*") && m.endsWith("*"))
          return (
            <em key={i} className="text-primary not-italic">
              {m.slice(1, -1)}
            </em>
          )
        return <span key={i}>{m}</span>
      })}
    </>
  )
}

export function Hero({
  eyebrow,
  titre,
  texte,
  punch,
  suite,
  actions,
  image,
  releves,
  clair = false,
}: HeroProps) {
  const lignes = Array.isArray(titre) ? titre : [titre]

  return (
    <section
      id="hero"
      className={cn(
        "hero-magic bg-background text-foreground",
        clair && "hero-magic--clair"
      )}
    >
      <div className="relative h-full overflow-hidden py-16 md:py-20 [padding-inline:var(--gutter)]">
        {/* max-w-[90rem] et la gouttiere du site, pour que le hero soit aligne
            au pixel pres sur .wrap (global.css). max-w-6xl + px-4/px-10
            decalaient son contenu de 72 px a 1440 px de large. */}
        <div className="z-10 mx-auto flex w-full max-w-[90rem] flex-col">
          <div className="mt-4 grid grid-cols-1 md:mt-8">
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="flex flex-col items-center gap-3">
                {eyebrow && (
                  <p
                    className={cn(
                      entree,
                      "m-0 font-mono text-[0.6875rem] font-medium tracking-[0.14em] uppercase text-primary duration-500"
                    )}
                  >
                    {eyebrow}
                  </p>
                )}

                <h1
                  className={cn(
                    entree,
                    "from-foreground to-foreground/60 m-0 bg-linear-to-br from-30% bg-clip-text text-4xl leading-[1.15] font-semibold tracking-tighter text-balance text-transparent duration-700 delay-100 sm:text-5xl md:text-6xl md:leading-[1.05]"
                  )}
                >
                  {lignes.map((l, i) => (
                    <span key={i}>
                      {l}
                      {i < lignes.length - 1 && <br />}
                    </span>
                  ))}
                </h1>

                <p
                  className={cn(
                    entree,
                    "text-muted-foreground m-0 max-w-2xl text-center text-lg font-medium tracking-tight text-balance duration-700 delay-200 md:text-xl"
                  )}
                >
                  <Riche texte={texte} />
                </p>

                {punch && (
                  <p
                    className={cn(
                      entree,
                      "m-0 max-w-2xl text-center text-xl leading-snug font-semibold text-balance duration-700 delay-300 md:text-2xl"
                    )}
                  >
                    <Riche texte={punch} />
                  </p>
                )}

                {suite?.map((s, i) => (
                  <p
                    key={i}
                    className={cn(
                      entree,
                      "text-muted-foreground m-0 max-w-2xl text-center text-base text-balance duration-700 delay-300"
                    )}
                  >
                    <Riche texte={s} />
                  </p>
                ))}
              </div>

              <div
                className={cn(
                  entree,
                  "flex w-full flex-col justify-center gap-4 duration-700 delay-400 md:flex-row"
                )}
              >
                {actions.map((a) => (
                  <Button
                    key={a.href + a.label}
                    asChild
                    variant={a.secondaire ? "outline" : "default"}
                    className={cn(
                      // whitespace-pre + h-11 fixe + overflow-hidden tronquaient le libelle
                      // des que le texte devenait trop long : au zoom, ou sur un
                      // numero de telephone. Hauteur minimale et retour a la ligne.
                      "group mx-auto min-h-11 w-full items-center rounded-full px-6 py-2 text-sm font-semibold tracking-tight whitespace-normal sm:w-fit md:mx-0 md:flex md:text-base",
                      "transform-gpu transition-all duration-300 ease-out hover:ring-2 hover:ring-offset-2 hover:ring-offset-background",
                      a.secondaire ? "hover:ring-border" : "hover:ring-primary"
                    )}
                  >
                    <a href={a.href}>
                      {a.label}
                      <ChevronRight className="size-4 translate-x-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {image && (
            <div
              className={cn(
                entree,
                "relative mt-12 h-full w-full rounded-md fill-mode-both delay-500 duration-1000",
                "after:absolute after:inset-0 after:z-10 after:rounded-md after:[background:linear-gradient(to_top,var(--background)_18%,transparent_60%)]"
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 bottom-1/2 h-full w-full transform-gpu filter-[blur(120px)]",
                  "bg-[linear-gradient(to_bottom,var(--primary),transparent_30%)]"
                )}
              />

              <img
                src={image.src}
                srcSet={image.srcSet}
                sizes={image.sizes}
                width={image.width}
                height={image.height}
                alt={image.alt}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="relative block h-auto max-h-[34rem] w-full rounded-md border object-cover"
              />

              <BorderBeam size={150} colorFrom="var(--accent-hi)" colorTo="var(--accent)" />
              <BorderBeam size={150} delay={7} colorFrom="var(--accent-hi)" colorTo="var(--accent)" />

              {releves && releves.length > 0 && (
                <dl className="relative z-20 m-0 mt-4 border-l-2 border-primary bg-card px-4 py-3 font-mono text-xs leading-7 text-muted-foreground md:absolute md:bottom-6 md:left-6 md:mt-0">
                  {releves.map((r) => (
                    <div key={r.label} className="flex flex-wrap gap-x-2">
                      <dt className="m-0">{r.label} —</dt>
                      <dd className="m-0 font-medium text-foreground">{r.valeur}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

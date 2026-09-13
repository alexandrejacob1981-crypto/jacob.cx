import { cn } from "@/lib/utils"

/**
 * Faisceau lumineux de bordure — version SANS JavaScript.
 *
 * L'original Magic UI animait `offset-distance` avec motion/react, ce qui
 * obligeait à hydrater tout le hero côté client : 126,8 Ko gzip de React par
 * page, pour deux filets décoratifs de 1 px.
 *
 * `offset-distance` est nativement animable en CSS. Le rendu est identique,
 * l'animation tourne sur le compositeur, et le composant devient purement
 * présentationnel : Astro le rend en HTML statique au build et ne livre plus
 * un octet de JavaScript.
 *
 * Les réglages passent par des variables CSS posées en style en ligne, pour
 * garder l'API d'origine (size, duration, delay, reverse, initialOffset).
 *
 * `prefers-reduced-motion` est respecté dans tailwind.css : le faisceau est
 * masqué, pas seulement accéléré. La règle générale de global.css ramène les
 * durées à 0,01 ms sans toucher au nombre d'itérations — sur une animation
 * infinie, ça produirait un clignotement bien pire que le mouvement d'origine.
 */
interface BorderBeamProps {
  /** Taille du faisceau, en pixels. */
  size?: number
  /** Durée d'un tour complet, en secondes. */
  duration?: number
  /** Décalage de départ, en secondes. */
  delay?: number
  /** Couleur de tête du dégradé. */
  colorFrom?: string
  /** Couleur de cœur du dégradé. */
  colorTo?: string
  /** Classes supplémentaires. */
  className?: string
  /** Styles supplémentaires. */
  style?: React.CSSProperties
  /** Sens inverse. */
  reverse?: boolean
  /** Position de départ sur le tracé, de 0 à 100. */
  initialOffset?: number
  /** Épaisseur du liseré, en pixels. */
  borderWidth?: number
}

export const BorderBeam = ({
  className,
  size = 50,
  delay = 0,
  duration = 6,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  style,
  reverse = false,
  initialOffset = 0,
  borderWidth = 1,
}: BorderBeamProps) => {
  return (
    <div
      className="pointer-events-none absolute inset-0 rounded-[inherit] border-(length:--border-beam-width) border-transparent mask-[linear-gradient(transparent,transparent),linear-gradient(#000,#000)] mask-intersect [mask-clip:padding-box,border-box]"
      style={
        {
          "--border-beam-width": `${borderWidth}px`,
        } as React.CSSProperties
      }
    >
      <div
        aria-hidden="true"
        className={cn(
          "faisceau absolute aspect-square",
          "bg-linear-to-l from-(--color-from) via-(--color-to) to-transparent",
          reverse && "faisceau--inverse",
          className
        )}
        style={
          {
            width: size,
            offsetPath: `rect(0 auto auto 0 round ${size}px)`,
            "--color-from": colorFrom,
            "--color-to": colorTo,
            "--faisceau-duree": `${duration}s`,
            "--faisceau-retard": `${-delay}s`,
            "--faisceau-depart": `${initialOffset}%`,
            ...style,
          } as React.CSSProperties
        }
      />
    </div>
  )
}

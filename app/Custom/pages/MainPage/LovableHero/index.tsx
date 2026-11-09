import { LovableContainer } from '../../../Layout/LovableContainer'
import { LovableButton } from '../../../components/LovableButton'
import {
  HeroActions,
  HeroBadge,
  HeroBadges,
  HeroContent,
  HeroDescription,
  HeroEyebrow,
  HeroGrid,
  HeroImage,
  HeroMediaWrap,
  HeroMetricItem,
  HeroMetricLabel,
  HeroMetricValue,
  HeroMetrics,
  HeroSection,
  HeroTitle,
  HeroTitleAccent,
} from './styles'
import type { LovableHeroProps } from './types'

export const LovableHero: React.FC<LovableHeroProps> = ({
  data,
  imageSrc,
  onPrimaryCta,
  onSecondaryCta,
}) => {
  return (
    <HeroSection id="hero">
      <LovableContainer>
        <HeroGrid>
          <HeroContent>
            <HeroEyebrow>{data.eyebrow}</HeroEyebrow>
            <HeroTitle tabIndex={-1}>
              {data.title} <HeroTitleAccent>{data.titleAccent}</HeroTitleAccent>
            </HeroTitle>
            <HeroDescription>{data.description}</HeroDescription>

            <HeroBadges>
              {data.badges.map((badge) => (
                <HeroBadge key={badge.id}>{badge.label}</HeroBadge>
              ))}
            </HeroBadges>

            <HeroActions>
              <LovableButton
                variant="primary"
                onClick={onPrimaryCta}
                value={'Обсудить перенос'}
              >
                {data.primaryCta}
              </LovableButton>
              <LovableButton variant="ghost" onClick={onSecondaryCta}>
                {data.secondaryCta}
              </LovableButton>
            </HeroActions>

            <HeroMetrics>
              {data.metrics.map((metric) => (
                <HeroMetricItem key={metric.id}>
                  <HeroMetricValue>{metric.value}</HeroMetricValue>
                  <HeroMetricLabel>{metric.label}</HeroMetricLabel>
                </HeroMetricItem>
              ))}
            </HeroMetrics>
          </HeroContent>

          <HeroMediaWrap>
            <HeroImage
              src={imageSrc}
              alt={data.imageAlt}
              width={1280}
              height={960}
            />
          </HeroMediaWrap>
        </HeroGrid>
      </LovableContainer>
    </HeroSection>
  )
}

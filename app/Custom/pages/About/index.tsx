import {
  AboutPageCustomStyled,
  AboutSection,
  AboutContainer,
  AboutHeroGrid,
  AboutContent,
  AboutTitle,
  AboutTextBlock,
  AboutImageWrap,
  AboutFullWidthSection,
  AboutSubtitle,
  AboutSubtitle3,
  AboutCaseSection,
  AboutCaseGrid,
  AboutCaseItem,
  AboutCaseImage,
  AboutCaseLabel,
} from './styles'
import type * as React from 'react'

export const AboutPage: React.FC = () => (
  <>
    <AboutPageCustomStyled>
      <AboutSection>
        <AboutContainer>
          <AboutHeroGrid>
            <AboutContent>
              <AboutTitle tabIndex={-1}>О Клубе</AboutTitle>

              <AboutTextBlock>
                MODX-Клуб появился 17 марта 2013 года (во всяком случае этой
                датой датируется первое{' '}
                <a
                  href="https://freecode.academy/blog/club/3.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  вступительное слово
                </a>
                ) и изначально имел цель быть полезным и специалистам, и
                конечным клиентам. И в первые годы вполне успешно с этим
                справлялся. Но позже MODX-рынок стал сильно проседать, а сам
                MODX как движок для сайтов почти перестал развиваться. Лично мне
                стало очень очень скучно и я ушел на более широкий рынок
                разработки - javascript. Вот здесь{' '}
                <a
                  href="https://freecode.academy/topics/vse,-net-bolshe-vashego-modx-kluba.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  короткая заметка
                </a>{' '}
                по этому поводу. В 2019 году MODX-официально был закрыт.
              </AboutTextBlock>

              <AboutTextBlock>
                Тогда сайт переехал на prisma-cms.com (домен уже потерян), а
                позже уже на{' '}
                <a
                  href="https://freecode.academy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  freecode.academy
                </a>
                , , где до сих пор весь старый контент и находится. То есть все
                публикации, все комментарии со времен запуска MODX-Клуба никуда
                не потерялись и там и находятся. Freecode.Academy предполагался
                как площадка, где начинающие специалисты могут изучать не только
                MODX, но и в целом веб-технологии, включая HTML, CSS,
                javascript. Но на сегодня активности практически нету. Связываю
                это со сменой современных подходов к разработке в целом -
                stackoverflow заменил многих. А сейчас еще и LLM набирает
                обороты и он в корне переписал все правила игры. По этой причине
                freecode.academy останется просто как архив старых заметок. В
                остальном же на нем можно поставить крест.
              </AboutTextBlock>
            </AboutContent>

            <AboutImageWrap>
              <img
                alt="Nikolai Lanets aka Fi1osof"
                loading="lazy"
                width="881"
                height="1024"
                decoding="async"
                style={{ color: 'transparent' }}
                src="/media/77e7041a77aa7a96.jpg"
              />
            </AboutImageWrap>
          </AboutHeroGrid>
        </AboutContainer>
      </AboutSection>

      <AboutFullWidthSection>
        <AboutContainer>
          <AboutSubtitle>Перезапуск MODX-Клуба</AboutSubtitle>

          <AboutTextBlock>
            В настоящий момент Клуб перезапущен в новом качестве и в составе
            только одного человека - меня. Меня зовут Николай Ланец, ранее на
            MODX-рынке хорошо известен под никнеймом Fi1osof, и хотя в 2019 году
            я официально завязал с MODX, все же я не завязывал ни на день с
            программировал, и продолжал развиваться во многих направлениях,
            включая JavaScript, TypeScript, React, GraphQL. А с начала 2025 года
            я очень плотно занимаюсь ИИ-технологиями, в том числе написал и
            развиваю свой движок{' '}
            <a
              href="https://github.com/haih-net/agent"
              target="_blank"
              rel="noopener noreferrer"
            >
              haih-agent
            </a>
            . По сути это основа для создания индивидуальных сайтов на самых
            современных технологиях, с уникальным ИИ-агентом на борту.
            Собственно, на нем я сейчас делаю и свои личные сайты, и сайты
            клиентов.
          </AboutTextBlock>

          <AboutSubtitle3>Цели Клуба</AboutSubtitle3>

          <AboutTextBlock>
            Обновленный Клуб не ставит своей целью кого-либо научить.
            Единственная целесообразная на сегодня цель - обеспечить
            безболезненный переезд старых сайтов с MODX на более современные
            технологии. Не смотря на то, что MODX-сообщество еще как-то
            существует, держится оно на том, что конечные клиенты пока еще не
            все понимают, что под обновляемой красивой оберткой MODX-а находится
            все та же старая начинка. Технически MODX практически не
            развивается. Чтобы убедиться в этом, достаточно зайти в официальный
            репозиторий MODX Revolution и посмотреть статистику. Усредненная
            картина примерно такая: штук 5 мерж-реквестов и парочка закрытых
            тикетов за месяц.
          </AboutTextBlock>

          <AboutTextBlock>
            Какие-то дополнения конечно пишутся немного для MODX, но они все всё
            равно создаются поверх старых рельс, так что ничего особо
            современного и эффективного там все равно не может получиться.
            Нельзя на старую телегу поставить новый двигатель и сразу выехать
            успешно на гоночную трассу. При этом многие опытные MODX-специалисты
            уже покинули этот рынок, а новые специалисты если и появляются,
            многим не хватает опыта создавать что-то новое. В лучшем случае они
            умеют прикрутить готовые компоненты. Я считаю, что это все
            губительно. То есть вместо того, чтобы освоить новые технологии и
            предложить клиентам новый уровень услуг, они продолжают вводить
            клиентов в заблуждение, что кроме MODX им больше ничего не нужно и
            на нем получится все сделать.
          </AboutTextBlock>

          <AboutTextBlock>
            Скорее всего я не смогу убедить в этом тех, кто думает еще только
            сделать себе сайт на MODX, но я могу помочь тем, кто уже сделал и
            разочаровался.{' '}
            <AboutCaseSection>
              <AboutSubtitle3>Пример работы</AboutSubtitle3>

              <AboutTextBlock>
                Сравните сами: сайт до и после переезда с MODX.
              </AboutTextBlock>

              <AboutCaseGrid>
                <AboutCaseItem
                  href="https://old.happybaby2000-ru.portfolio.fi1osof.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AboutCaseImage>
                    <img
                      alt="Старая версия сайта happybaby2000.ru"
                      loading="lazy"
                      width="800"
                      height="450"
                      decoding="async"
                      style={{ color: 'transparent' }}
                      src="/media/11c95fdfea3ef124.png"
                    />
                  </AboutCaseImage>

                  <AboutCaseLabel>
                    Было{/* */}{' '}
                    <b>https://old.happybaby2000-ru.portfolio.fi1osof.ru</b>
                  </AboutCaseLabel>
                </AboutCaseItem>
                <AboutCaseItem
                  href="https://happybaby2000.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AboutCaseImage>
                    <img
                      alt="Новая версия сайта happybaby2000.ru"
                      loading="lazy"
                      width="800"
                      height="450"
                      decoding="async"
                      style={{ color: 'transparent' }}
                      src="/media/87232562fb06068c.png"
                    />
                  </AboutCaseImage>

                  <AboutCaseLabel>
                    Стало{/* */} <b>https://happybaby2000.ru</b>
                  </AboutCaseLabel>
                </AboutCaseItem>
              </AboutCaseGrid>
            </AboutCaseSection>
            Если у вас есть работающий MODX-сайт и вы хотите получить его более
            современную версию,{/* */} {/* */}как это можно сделать.
          </AboutTextBlock>
        </AboutContainer>
      </AboutFullWidthSection>
    </AboutPageCustomStyled>
  </>
)

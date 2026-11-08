import type * as React from 'react'

export const AboutPage: React.FC = () => (
  <>
    <div className="sc-b8034c2-0">
      <section className="sc-b8034c2-1 jvZeEj">
        <div className="sc-b8034c2-2 jkIdwk">
          <div className="sc-b8034c2-3 jUDmvO">
            <div className="sc-b8034c2-4 PmyxU">
              <h1 className="sc-b8034c2-5 fVgGeK" tabIndex={-1}>
                О Клубе
              </h1>

              <div className="sc-b8034c2-7 fFroox">
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
              </div>

              <div className="sc-b8034c2-7 fFroox">
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
              </div>
            </div>

            <div className="sc-b8034c2-6 dHoBMD">
              <img
                alt="Nikolai Lanets aka Fi1osof"
                loading="lazy"
                width="881"
                height="1024"
                decoding="async"
                style={{ color: 'transparent' }}
                src="/media/77e7041a77aa7a96.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sc-b8034c2-10 drmLDa">
        <div className="sc-b8034c2-2 jkIdwk">
          <h2 className="sc-b8034c2-8 jbrzEo">Перезапуск MODX-Клуба</h2>

          <div className="sc-b8034c2-7 fFroox">
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
          </div>

          <h3 className="sc-b8034c2-9 dPmKrF">Цели Клуба</h3>

          <div className="sc-b8034c2-7 fFroox">
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
          </div>

          <div className="sc-b8034c2-7 fFroox">
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
          </div>

          <div className="sc-b8034c2-7 fFroox">
            Скорее всего я не смогу убедить в этом тех, кто думает еще только
            сделать себе сайт на MODX, но я могу помочь тем, кто уже сделал и
            разочаровался.{' '}
            <div className="sc-b8034c2-11 ctYwsD">
              <h3 className="sc-b8034c2-9 dPmKrF">Пример работы</h3>

              <div className="sc-b8034c2-7 fFroox">
                Сравните сами: сайт до и после переезда с MODX.
              </div>

              <div className="sc-b8034c2-12 fwmKeY">
                <a
                  href="https://old.happybaby2000-ru.portfolio.fi1osof.ru/"
                  target="_blank"
                  className="sc-b8034c2-13 dIMlnk"
                  rel="noopener noreferrer"
                >
                  <div className="sc-b8034c2-14 dxDBHv">
                    <img
                      alt="Старая версия сайта happybaby2000.ru"
                      loading="lazy"
                      width="800"
                      height="450"
                      decoding="async"
                      style={{ color: 'transparent' }}
                      src="/media/11c95fdfea3ef124.png"
                    />
                  </div>

                  <div className="sc-b8034c2-15 ckxAKx">
                    Было{/* */}{' '}
                    <b>https://old.happybaby2000-ru.portfolio.fi1osof.ru</b>
                  </div>
                </a>
                <a
                  href="https://happybaby2000.ru/"
                  target="_blank"
                  className="sc-b8034c2-13 dIMlnk"
                  rel="noopener noreferrer"
                >
                  <div className="sc-b8034c2-14 dxDBHv">
                    <img
                      alt="Новая версия сайта happybaby2000.ru"
                      loading="lazy"
                      width="800"
                      height="450"
                      decoding="async"
                      style={{ color: 'transparent' }}
                      src="/media/87232562fb06068c.png"
                    />
                  </div>

                  <div className="sc-b8034c2-15 ckxAKx">
                    Стало{/* */} <b>https://happybaby2000.ru</b>
                  </div>
                </a>
              </div>
            </div>
            Если у вас есть работающий MODX-сайт и вы хотите получить его более
            современную версию,{/* */} {/* */}как это можно сделать.
          </div>
        </div>
      </section>
    </div>
  </>
)

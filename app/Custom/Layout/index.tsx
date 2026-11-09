import type * as React from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { siteLayout as page } from './data'
import { useAppContext } from '../components/AppContext'
import { ChatProvider } from '../components/Chat/ChatWidget/context'
import { ChatWidget } from '../components/Chat/ChatWidget'
import { FeedbackForm } from '../components/Feedback'

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { openFeedback } = useAppContext() ?? {}
  const navigate = useNavigate()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    setOpen(false)
    if (location.hash) {
      document
        .getElementById(decodeURIComponent(location.hash.slice(1)))
        ?.scrollIntoView()
    } else {
      ref.current
        ?.querySelector<HTMLHeadingElement>('h1')
        ?.focus({ preventScroll: true })
    }
  }, [location.key, location.hash])
  const click = useCallback<React.MouseEventHandler<HTMLDivElement>>(
    (event) => {
      const target = event.target as Element
      if (target.closest('[data-action=feedback]')) {
        openFeedback?.()
        setOpen(false)
        return
      }
      const burger = target.closest<HTMLButtonElement>('[data-area=burger]')
      if (burger) {
        setOpen(!open)
        burger.setAttribute('aria-expanded', String(!open))
        return
      }
      const link = target.closest<HTMLAnchorElement>('a[href]')
      if (
        !link ||
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        link.target ||
        link.hasAttribute('download')
      ) {
        return
      }
      const url = new URL(link.href)
      if (url.origin !== window.location.origin) {
        return
      }
      event.preventDefault()
      setOpen(false)
      void navigate(url.pathname + url.search + url.hash)
    },
    [navigate, open, openFeedback],
  )
  const keyDown = useCallback<React.KeyboardEventHandler<HTMLDivElement>>(
    (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        ref.current
          ?.querySelector<HTMLButtonElement>('[data-area=burger]')
          ?.focus()
      }
    },
    [],
  )
  useEffect(() => {
    const burger =
      ref.current?.querySelector<HTMLButtonElement>('[data-area=burger]')
    burger?.setAttribute('aria-expanded', String(open))
    burger?.setAttribute(
      'aria-label',
      page.locale === 'en'
        ? open
          ? 'Close menu'
          : 'Open menu'
        : open
          ? 'Закрыть меню'
          : 'Открыть меню',
    )
  }, [open])
  return (
    <ChatProvider>
      <div
        className={page.outerClass}
        ref={ref}
        onClick={click}
        onKeyDown={keyDown}
        data-menu-open={open}
      >
        <div className={page.shellClass}>
          <div
            data-fragment="header"
            dangerouslySetInnerHTML={{ __html: page.header }}
          />
          <main className={page.mainClass}>{children}</main>
          <div
            data-fragment="footer"
            dangerouslySetInnerHTML={{ __html: page.footer }}
          />
        </div>
        {/* Историческое ограничение переноса отменено: виджет подключён по запросу владельца. */}
        {/* ИИ-агент пока скрыт. ChatWidget не подключается; разметка его кнопок не включается в HTML-снимки. */}
        <FeedbackForm />
        <ChatWidget />
      </div>
    </ChatProvider>
  )
}

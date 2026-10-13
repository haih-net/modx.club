import type * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import type { StaticPage } from '../../interfaces'

export const SiteLayout: React.FC<
  React.PropsWithChildren<{ page: StaticPage }>
> = ({ page, children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    setOpen(false)
    const checkbox = ref.current?.querySelector<HTMLInputElement>(
      '#locale-switcher-toggle',
    )
    if (checkbox) checkbox.checked = false
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
  const click: React.MouseEventHandler<HTMLDivElement> = (event) => {
    const target = event.target as Element
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
    )
      return
    const url = new URL(link.href)
    if (url.origin !== window.location.origin) return
    event.preventDefault()
    setOpen(false)
    void navigate(url.pathname + url.search + url.hash)
  }
  const keyDown: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === 'Escape') {
      setOpen(false)
      ref.current
        ?.querySelector<HTMLButtonElement>('[data-area=burger]')
        ?.focus()
    }
  }
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
  }, [open, page.locale])
  return (
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
      {/* ИИ-агент пока скрыт. ChatWidget не подключается; кнопки сохранены в HTML-комментариях файлов содержания. */}
    </div>
  )
}

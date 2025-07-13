import { useState, useEffect } from 'react'
import { sanityClient } from '@/services/sanity'

export interface SiteSettings {
  siteTitle: string
  siteDescription?: string
  openGraphImage?: any
  navLinks?: Array<{
    title: string
    href: string
  }>
  socialLinks?: Array<{
    platform: string
    url: string
  }>
  footerText?: string
}

export function useSiteSettings() {
  const [settings, setSettings] = useState<SiteSettings | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        setLoading(true)
        const data = await sanityClient.fetch(`
          *[_type == "siteSettings"][0]{
            siteTitle,
            siteDescription,
            openGraphImage,
            navLinks[]{
              title,
              href
            },
            socialLinks[]{
              platform,
              url
            },
            footerText
          }
        `)
        setSettings(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch site settings')
        console.error('Error fetching site settings:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchSettings()
  }, [])

  return { settings, loading, error }
}
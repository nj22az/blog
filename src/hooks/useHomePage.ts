import { useState, useEffect } from 'react'
import { sanityClient } from '@/services/sanity'

export interface HomePage {
  heroHeadline: string
  heroSubtitle?: string
  heroImage?: any
  welcomeTitle?: string
  welcomeText?: any[]
  metaTitle?: string
  metaDescription?: string
}

export function useHomePage() {
  const [homePage, setHomePage] = useState<HomePage | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchHomePage = async () => {
      try {
        setLoading(true)
        const data = await sanityClient.fetch(`
          *[_type == "homePage"][0]{
            heroHeadline,
            heroSubtitle,
            heroImage,
            welcomeTitle,
            welcomeText,
            metaTitle,
            metaDescription
          }
        `)
        setHomePage(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch home page')
        console.error('Error fetching home page:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchHomePage()
  }, [])

  return { homePage, loading, error }
}
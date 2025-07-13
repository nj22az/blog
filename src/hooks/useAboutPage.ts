import { useState, useEffect } from 'react'
import { sanityClient } from '@/services/sanity'

export interface AboutPage {
  nilsBio?: any[]
  thuanBio?: any[]
  philosophyTitle?: string
  philosophyText?: any[]
  metaTitle?: string
  metaDescription?: string
}

export function useAboutPage() {
  const [aboutPage, setAboutPage] = useState<AboutPage | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchAboutPage = async () => {
      try {
        setLoading(true)
        const data = await sanityClient.fetch(`
          *[_type == "aboutPage"][0]{
            nilsBio,
            thuanBio,
            philosophyTitle,
            philosophyText,
            metaTitle,
            metaDescription
          }
        `)
        setAboutPage(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch about page')
        console.error('Error fetching about page:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchAboutPage()
  }, [])

  return { aboutPage, loading, error }
}
import { useState, useEffect } from 'react'
import { sanityClient } from '@/services/sanity'

export interface ContactMethod {
  type: string
  value: string
  icon?: string
  order?: number
  description?: string
  content?: string
  buttonText?: string
}

export interface ContactPage {
  headerTitle: string
  headerDescription?: any[]
  contactMethods?: ContactMethod[]
  responseCommitmentTitle?: string
  responseCommitmentText?: string
  metaTitle?: string
  metaDescription?: string
}

export function useContactPage() {
  const [contactPage, setContactPage] = useState<ContactPage | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchContactPage = async () => {
      try {
        setLoading(true)
        const data = await sanityClient.fetch(`
          *[_type == "contactPage"][0]{
            headerTitle,
            headerDescription,
            contactMethods[]{
              type,
              value,
              icon,
              order,
              description,
              content,
              buttonText
            } | order(order asc),
            responseCommitmentTitle,
            responseCommitmentText,
            metaTitle,
            metaDescription
          }
        `)
        setContactPage(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch contact page')
        console.error('Error fetching contact page:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchContactPage()
  }, [])

  return { contactPage, loading, error }
}
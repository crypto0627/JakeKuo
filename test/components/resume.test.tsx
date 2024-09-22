import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Component from '../../app/components/resume'

describe('Resume Component', () => {
  beforeEach(() => {
    render(<Component />)
  })

  test('renders profile section', () => {
    expect(screen.getByTestId('profile-heading')).toHaveTextContent('Profile')
    expect(
      screen.getByRole('heading', { name: 'Jake Kuo', level: 1 })
    ).toBeInTheDocument()
  })

  test('renders work experience section', () => {
    expect(screen.getByTestId('experience-heading')).toHaveTextContent(
      'Work Experience'
    )
    expect(screen.getByText('XUEDAO')).toBeInTheDocument()
  })

  test('renders skills section', () => {
    expect(screen.getByTestId('skills-heading')).toHaveTextContent('Skills')
    expect(screen.getByText('Frontend Basics')).toBeInTheDocument()
    expect(screen.getByText('UI Frameworks')).toBeInTheDocument()
    expect(screen.getByText('Frontend Frameworks')).toBeInTheDocument()
  })

  test('renders education section', () => {
    expect(screen.getByTestId('education-heading')).toHaveTextContent(
      'Education'
    )
    expect(
      screen.getByText("Master's in Computer and Communication Engineering")
    ).toBeInTheDocument()
  })

  test('renders events section', () => {
    expect(screen.getByTestId('events-heading')).toHaveTextContent(
      'Web3 hackathons'
    )
    expect(screen.getByText('2024 XUEDAO Hackathon')).toBeInTheDocument()
  })

  test('renders projects section', () => {
    expect(screen.getByTestId('projects-heading')).toHaveTextContent(
      'Select Projects'
    )
    expect(screen.getByText('XUEDAO Official Website')).toBeInTheDocument()
    expect(screen.getByText('Web3 Frontend Template')).toBeInTheDocument()
  })

  test('renders footer', () => {
    expect(
      screen.getByText((content, element) => {
        return (
          element?.tagName.toLowerCase() === 'footer' &&
          content.includes('Jake Kuo')
        )
      })
    ).toBeInTheDocument()
    expect(
      screen.getByText((content) => content.includes('© 2024'))
    ).toBeInTheDocument()
  })
})

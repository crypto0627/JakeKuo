import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Component from '@/app/components/resume'

// 模拟 framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    section: jest
      .fn()
      .mockImplementation(({ children, ...props }) => (
        <section {...props}>{children}</section>
      )),
    a: jest
      .fn()
      .mockImplementation(({ children, ...props }) => (
        <a {...props}>{children}</a>
      )),
    div: jest
      .fn()
      .mockImplementation(({ children, ...props }) => (
        <div {...props}>{children}</div>
      )),
  },
  useScroll: jest.fn().mockReturnValue({ scrollYProgress: { get: jest.fn() } }),
  useTransform: jest.fn(),
}))

// 模拟 next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}))

describe('Resume Component', () => {
  beforeEach(() => {
    render(<Component />)
  })

  test('renders profile section', () => {
    expect(screen.getByTestId('profile-heading')).toHaveTextContent('Profile')
    expect(
      screen.getByRole('heading', { name: 'Jake Kuo', level: 1 })
    ).toBeInTheDocument()
    expect(
      screen.getByText('Frontend engineer | Blockchain')
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Hi, This is Jake Kuo from XUEDAO/)
    ).toBeInTheDocument()
  })

  test('renders work experience section', () => {
    expect(screen.getByTestId('experience-heading')).toHaveTextContent(
      'Work Experience'
    )
    expect(screen.getByText('XueDAO')).toBeInTheDocument()
    expect(screen.getByText('Cathay Financial Holdings')).toBeInTheDocument()
  })

  test('renders skills section', () => {
    expect(screen.getByTestId('skills-heading')).toHaveTextContent('Skills')
    expect(screen.getByText('Frontend Basics')).toBeInTheDocument()
    expect(screen.getByText('UI Frameworks')).toBeInTheDocument()
    expect(screen.getByText('Frontend Frameworks')).toBeInTheDocument()
    expect(screen.getByText('Backend Technologies')).toBeInTheDocument()
    expect(screen.getByText('API Technologies')).toBeInTheDocument()
    expect(screen.getByText('Blockchain Technologies')).toBeInTheDocument()
  })

  test('renders education section', () => {
    expect(screen.getByTestId('education-heading')).toHaveTextContent(
      'Education'
    )
    expect(
      screen.getByText(
        'Master of Technology in Computer and Communication engineering'
      )
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        'Bachelor of Technology in Computer and Communication engineering'
      )
    ).toBeInTheDocument()
  })

  test('renders events section', () => {
    expect(screen.getByTestId('events-heading')).toHaveTextContent(
      'Web3 hackathons'
    )
    expect(screen.getByText('2024 XueDAO hackathon')).toBeInTheDocument()
    expect(screen.getByText('2024 Celestia hackathon')).toBeInTheDocument()
    expect(screen.getByText('2024 ChainLink hackathon')).toBeInTheDocument()
  })

  test('renders projects section', () => {
    expect(screen.getByTestId('projects-heading')).toHaveTextContent(
      'Select Projects'
    )
    expect(screen.getByText('XueDAO office website')).toBeInTheDocument()
    expect(screen.getByText('Web3 Frontend template')).toBeInTheDocument()
  })

  test('renders footer', () => {
    expect(
      screen.getByText('© 2024 Jake Kuo. All rights reserved.')
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        'Dedicated to web frontend and web3 field through education.'
      )
    ).toBeInTheDocument()
  })
})

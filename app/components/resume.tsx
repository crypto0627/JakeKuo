'use client'
import { useState, useCallback, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
  Leaf,
  Briefcase,
  Code,
  GraduationCap,
  Calendar,
  Menu,
  X,
  Github,
  Linkedin,
  Instagram,
  Send,
  Globe,
  Palette,
  Cpu,
  Server,
  Database,
  Network,
  Wrench,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

const NavLinks = ({ onClose }: { onClose: () => void }) => (
  <>
    {['profile', 'experience', 'skills', 'education', 'events', 'projects'].map(
      (section) => (
        <motion.a
          key={section}
          href={`#${section}`}
          className="block py-2 hover:text-green-200"
          onClick={onClose}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </motion.a>
      )
    )}
  </>
)

const SocialIcons = () => (
  <div className="flex space-x-4">
    {[
      { href: 'https://github.com/crypto0627', Icon: Github },
      {
        href: 'https://www.linkedin.com/in/lai-hung-kuo-83b186245/',
        Icon: Linkedin,
      },
      { href: 'https://www.instagram.com/klhong_0627/', Icon: Instagram },
      { href: 'https://t.me/JakeKuo', Icon: Send },
    ].map(({ href, Icon }) => (
      <motion.div
        key={href}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        <Link href={href} target="_blank" rel="noopener noreferrer">
          <Icon className="w-5 h-5 hover:text-green-200" />
        </Link>
      </motion.div>
    ))}
  </div>
)

const Section = ({
  id,
  title,
  Icon,
  children,
}: {
  id: string
  title: string
  Icon: React.ElementType
  children: React.ReactNode
}) => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50])

  return (
    <motion.section
      id={id}
      className="mb-12"
      ref={sectionRef}
      style={{ opacity, y }}
    >
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Icon className="mr-2" /> {title}
      </h2>
      <Card className="bg-white shadow-lg">
        <CardContent className="p-6">{children}</CardContent>
      </Card>
    </motion.section>
  )
}

const StaticSection = ({
  id,
  title,
  Icon,
  children,
}: {
  id: string
  title: string
  Icon: React.ElementType
  children: React.ReactNode
}) => {
  return (
    <section id={id} className="mb-12">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Icon className="mr-2" /> {title}
      </h2>
      <Card className="bg-white shadow-lg">
        <CardContent className="p-6">{children}</CardContent>
      </Card>
    </section>
  )
}

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = useCallback(() => setIsMenuOpen(false), [])

  return (
    <div className="min-h-screen bg-green-50 text-green-900 font-sans relative overflow-hidden">
      {/* Navbar */}
      <nav className="bg-green-800 text-white p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-2xl font-bold">Jake Kuo</span>
          <div className="hidden md:flex space-x-4">
            <NavLinks onClose={() => {}} />
          </div>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="relative w-6 h-6">
                  <Menu
                    className={`absolute inset-0 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}
                  />
                  <X
                    className={`absolute inset-0 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 rotate-90' : 'opacity-0 -rotate-90'}`}
                  />
                </div>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[250px] bg-green-800 text-white"
            >
              <nav className="flex flex-col space-y-4 mt-8">
                <NavLinks onClose={closeMenu} />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Profile */}
        <StaticSection id="profile" title="Profile" Icon={Leaf}>
          <div className="flex flex-col md:flex-row items-center">
            <Image
              src="/profile.webp"
              alt="Jake Kuo"
              width={150}
              height={150}
              className="rounded-xl mb-4 md:mb-0 md:mr-6 w-auto h-auto"
              priority
            />
            <div>
              <h1 className="text-3xl font-bold mb-2">Jake Kuo</h1>
              <p className="text-xl mb-4">Frontend engineer | Blockchain</p>
              <p className="mb-4">
                Hi, This is Jake Kuo from XUEDAO, the first Taiwan&apos;s
                student blockchain community. I&apos;m a blockchain frontend
                engineer at XueDAO.
              </p>
              <p className="mb-4">
                Website:{' '}
                <Link
                  className="hover:text-green-500"
                  href="https://www.xuedao.xyz"
                  target="_blank"
                >
                  https://www.xuedao.xyz
                </Link>{' '}
              </p>
              <Button className="mb-4 bg-green-600 hover:bg-green-900">
                <a href="/JakeKuo-Resume.pdf" target="_blank" download>
                  Download Resume
                </a>
              </Button>
              <SocialIcons />
            </div>
          </div>
        </StaticSection>

        {/* Work Experience */}
        <Section id="experience" title="Work Experience" Icon={Briefcase}>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">XueDAO</h3>
            <p className="text-green-600">
              Core-contributor | 2024/04 - Present
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>
                Develop and implement web3 project for education programs.
              </li>
              <li>Build a official website</li>
              <li>Conduct frontend workshops for community members</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Cathay Financial Holdings</h3>
            <p className="text-green-600">
              Blockchain RD Intern | 2023/07 - 2024/02
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Cathay Summer CIP plan</li>
              <li>Develop blockchain business application</li>
              <li>Attend web3 hackathon</li>
            </ul>
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills" Icon={Code}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-green-100 p-4 rounded-lg">
              <Globe className="mb-2" />
              <h3 className="font-semibold">Frontend Basics</h3>
              <ul className="list-disc list-inside mt-2">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
              </ul>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <Palette className="mb-2" />
              <h3 className="font-semibold">UI Frameworks</h3>
              <ul className="list-disc list-inside mt-2">
                <li>TailwindCSS</li>
                <li>Shadcn</li>
                <li>Material UI</li>
              </ul>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <Cpu className="mb-2" />
              <h3 className="font-semibold">Frontend Frameworks</h3>
              <ul className="list-disc list-inside mt-2">
                <li>React.js (18+)</li>
                <li>Next.js (13+)</li>
              </ul>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <Server className="mb-2" />
              <h3 className="font-semibold">Backend Technologies</h3>
              <ul className="list-disc list-inside mt-2">
                <li>Node.js (16+)</li>
                <li>ASP.NET 8</li>
                <li>Python crawler</li>
              </ul>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <Network className="mb-2" />
              <h3 className="font-semibold">API Technologies</h3>
              <ul className="list-disc list-inside mt-2">
                <li>RESTful API</li>
                <li>gRPC</li>
                <li>GraphQL</li>
                <li>Swagger API</li>
                <li>JWT</li>
              </ul>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <Network className="mb-2" />
              <h3 className="font-semibold">Blockchain Technologies</h3>
              <ul className="list-disc list-inside mt-2">
                <li>Solidity</li>
                <li>web3.js/Ethers.js</li>
                <li>Hardhat</li>
                <li>Openzeppelin ERC-20/721/1155</li>
                <li>IPFS</li>
              </ul>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <Wrench className="mb-2" />
              <h3 className="font-semibold">Development Tools</h3>
              <ul className="list-disc list-inside mt-2">
                <li>Git version control</li>
                <li>Linux shell scripting</li>
                <li>MacOS homebrew</li>
                <li>Windows WSL2</li>
                <li>Docker</li>
                <li>Cloudflare</li>
                <li>AWS</li>
              </ul>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <Database className="mb-2" />
              <h3 className="font-semibold">Databases</h3>
              <ul className="list-disc list-inside mt-2">
                <li>SQL Server</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Education */}
        <Section id="education" title="Education" Icon={GraduationCap}>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">
              Master of Technology in Computer and Communication engineering
            </h3>
            <p className="text-green-600">
              National Kaohsiung University of Science and Technology | 2022/09
              - 2024/01
            </p>
            <p>
              Thesis:{' '}
              <Link
                className="hover:text-green-500"
                href="https://hdl.handle.net/11296/7224d3"
                target="_blank"
              >
                &quot;Assessing the Feasibility of the Stellar Consensus
                Protocol in Pi Network and Business Model Analysis&quot;
              </Link>
            </p>
            <p>Blockchain</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              Bachelor of Technology in Computer and Communication engineering
            </h3>
            <p className="text-green-600">
              National Kaohsiung University of Science and Technology | 2018/09
              - 2024/06
            </p>
            <p>Modern web | Computer Science</p>
          </div>
        </Section>

        {/* Events */}
        <Section id="events" title="Web3 hackathons" Icon={Calendar}>
          <ul className="space-y-4">
            <li>
              <h3 className="text-xl font-semibold">
                2024 XueDAO hackathon{' '}
                <Link
                  className="text-sm font-semibold hover:text-green-500"
                  href="https://github.com/hollow-leaf/girudo"
                  target="_blank"
                >
                  https://github.com/hollow-leaf/girudo
                </Link>
              </h3>
              <p className="text-green-600">
                Frontend engineer | win second place
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">
                2024 Celestia hackathon{' '}
                <Link
                  className="text-sm font-semibold hover:text-green-500"
                  href="https://github.com/hollow-leaf/Konan"
                  target="_blank"
                >
                  https://github.com/hollow-leaf/Konan
                </Link>
              </h3>
              <p className="text-green-600">
                Frontend engineer | win bounty pool
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">
                2024 ChainLink hackathon{' '}
                <Link
                  className="text-sm font-semibold hover:text-green-500"
                  href="https://github.com/hollow-leaf/Konan"
                  target="_blank"
                >
                  https://github.com/hollow-leaf/Konan
                </Link>
              </h3>
              <p className="text-green-600">Frontend engineer</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">
                2024 EthTaipei hackathon{' '}
                <Link
                  className="text-sm font-semibold hover:text-green-500"
                  href="https://github.com/hollow-leaf/Shishimaru"
                  target="_blank"
                >
                  https://github.com/hollow-leaf/Shishimaru
                </Link>
              </h3>
              <p className="text-green-600">
                Frontend engineer | win second place
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">
                2024 Binance BNBChain Q1 hackathon{' '}
                <Link
                  className="text-sm font-semibold hover:text-green-500"
                  href="https://github.com/hollow-leaf/psyduck"
                  target="_blank"
                >
                  https://github.com/hollow-leaf/psyduck
                </Link>
              </h3>
              <p className="text-green-600">
                Frontend engineer | win bounty pool
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">
                2023 Taipei blockchain week hackathon{' '}
                <Link
                  className="text-sm font-semibold hover:text-green-500"
                  href="https://github.com/hollow-leaf/psyduck"
                  target="_blank"
                >
                  https://github.com/hollow-leaf/psyduck
                </Link>
              </h3>
              <p className="text-green-600">
                Frontend engineer | win bounty pool
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">
                2023 Telegram Ton Blockchain hackathon{' '}
                <Link
                  className="text-sm font-semibold hover:text-green-500"
                  href="https://github.com/hollow-leaf/inazuma"
                  target="_blank"
                >
                  https://github.com/hollow-leaf/inazuma
                </Link>
              </h3>
              <p className="text-green-600">
                Frontend engineer | win bounty pool
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">
                2024 Filecoin green Funding the common hackathon{' '}
                <Link
                  className="text-sm font-semibold hover:text-green-500"
                  href="https://github.com/hollow-leaf/inazuma"
                  target="_blank"
                >
                  https://github.com/hollow-leaf/inazuma
                </Link>
              </h3>
              <p className="text-green-600">
                Frontend engineer | win second place
              </p>
            </li>
          </ul>
        </Section>

        {/* Select Projects */}
        <Section id="projects" title="Select Projects" Icon={Leaf}>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  XueDAO office website{' '}
                  <Link
                    className="text-sm font-semibold hover:text-green-500"
                    href="https://github.com/crypto0627/xd-website"
                    target="_blank"
                  >
                    https://github.com/crypto0627/xd-website
                  </Link>
                </h3>
                <p>
                  XueDAO is Taiwan&apos;s pioneering community for student
                  developers, created by students, for students. Our vision is
                  to build the ultimate blockchain learning hub, showing the
                  world that Taiwanese students can BUIDL !
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Web3 Frontend template{' '}
                  <Link
                    className="text-sm font-semibold hover:text-green-500"
                    href="https://github.com/XueDAOTW/xd-template-eth-web"
                    target="_blank"
                  >
                    https://github.com/XueDAOTW/xd-template-eth-web
                  </Link>
                </h3>
                <p>
                  The easiest way to deploy your Next.js app is to use the
                  Vercel Platform from the creators of Next.js.
                </p>
              </CardContent>
            </Card>
          </div>
        </Section>
      </div>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Jake Kuo. All rights reserved.</p>
          <p className="mt-2">
            Dedicated to web frontend and web3 field through education.
          </p>
        </div>
      </footer>
    </div>
  )
}
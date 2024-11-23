import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Leaf,
  Briefcase,
  Code,
  GraduationCap,
  Calendar,
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
  Wrench
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './Navbar'

export const metadata: Metadata = {
  title: 'Jake Kuo - personal website',
  description:
    'jakekuo-personal website, frontend engineer, resume, portfolio, blockchain'
}

const socialLinks = [
  { href: 'https://github.com/crypto0627', Icon: Github },
  {
    href: 'https://www.linkedin.com/in/lai-hung-kuo-83b186245/',
    Icon: Linkedin
  },
  { href: 'https://www.instagram.com/klhong_0627/', Icon: Instagram },
  { href: 'https://t.me/JakeKuo', Icon: Send }
]

const SocialIcons = () => (
  <div className="flex space-x-4">
    {socialLinks.map(({ href, Icon }) => (
      <Link
        key={href}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="transform transition-transform hover:scale-110"
      >
        <Icon className="w-5 h-5 hover:text-green-200" />
      </Link>
    ))}
  </div>
)

const Section = ({
  id,
  title,
  Icon,
  children
}: {
  id: string
  title: string
  Icon: React.ElementType
  children: React.ReactNode
}) => (
  <section id={id} className="mb-12">
    <h2
      className="text-2xl font-bold mb-4 flex items-center"
      data-testid={`${id}-heading`}
    >
      <Icon className="mr-2" /> {title}
    </h2>
    <Card className="bg-white shadow-lg">
      <CardContent className="p-6">{children}</CardContent>
    </Card>
  </section>
)

const SkillCard = ({
  icon: Icon,
  title,
  skills
}: {
  icon: React.ElementType
  title: string
  skills: string[]
}) => (
  <div className="bg-green-100 p-4 rounded-lg">
    <Icon className="mb-2" />
    <h3 className="font-semibold">{title}</h3>
    <ul className="list-disc list-inside mt-2">
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  </div>
)

export default function Resume() {
  return (
    <div className="min-h-screen bg-green-50 text-green-900 font-sans relative">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Section id="profile" title="Profile" Icon={Leaf}>
          <div className="flex flex-col md:flex-row items-center">
            <Image
              src="https://www.jakekuo.com/profile.webp"
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
                </Link>
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="mb-4 bg-green-600 hover:bg-green-900">
                  <a href="/JakeKuo-Frontend-en.pdf" target="_blank" download>
                    Download English Resume
                  </a>
                </Button>
                <Button className="mb-4 bg-green-600 hover:bg-green-900">
                  <a href="/中文(繁體).pdf" target="_blank" download>
                    Download Chinese(繁體) Resume
                  </a>
                </Button>
                <Button className="mb-4 bg-green-600 hover:bg-green-900">
                  <a href="/中文(简体).pdf" target="_blank" download>
                    Download Chinese(简体) Resume
                  </a>
                </Button>
              </div>
              <SocialIcons />
            </div>
          </div>
        </Section>

        <Section id="experience" title="Work Experience" Icon={Briefcase}>
          {[
            {
              company: 'XueDAO',
              position: 'Core-contributor',
              period: '2024/04 - Present',
              responsibilities: [
                'Develop and implement web3 project for education programs.',
                'Build a official website',
                'Conduct frontend workshops for community members'
              ]
            },
            {
              company: 'Cathay Financial Holdings',
              position: 'Blockchain RD Intern',
              period: '2023/07 - 2024/02',
              responsibilities: [
                'Cathay Summer CIP plan',
                'Develop blockchain business application',
                'Attend web3 hackathon'
              ]
            }
          ].map(({ company, position, period, responsibilities }) => (
            <div key={company} className="mb-6">
              <h3 className="text-xl font-semibold">{company}</h3>
              <p className="text-green-600">
                {position} | {period}
              </p>
              <ul className="list-disc list-inside mt-2">
                {responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        <Section id="skills" title="Skills" Icon={Code}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SkillCard
              icon={Globe}
              title="Frontend Basics"
              skills={['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript']}
            />
            <SkillCard
              icon={Palette}
              title="UI Frameworks"
              skills={['TailwindCSS', 'Shadcn', 'Material UI']}
            />
            <SkillCard
              icon={Cpu}
              title="Frontend Frameworks"
              skills={['React.js (18+)', 'Next.js (13+)']}
            />
            <SkillCard
              icon={Server}
              title="Backend Technologies"
              skills={['Node.js (16+)', 'ASP.NET 8', 'Python crawler']}
            />
            <SkillCard
              icon={Network}
              title="API Technologies"
              skills={['RESTful API', 'Swagger API', 'JWT']}
            />
            <SkillCard
              icon={Network}
              title="Blockchain Technologies"
              skills={[
                'Solidity',
                'web3.js/Ethers.js',
                'Hardhat',
                'Openzeppelin ERC-20/721/1155',
                'IPFS'
              ]}
            />
            <SkillCard
              icon={Wrench}
              title="Development Tools"
              skills={[
                'Git version control',
                'Linux shell scripting',
                'MacOS homebrew',
                'Windows WSL2',
                'Docker',
                'Cloudflare pages',
                'Vercel'
              ]}
            />
            <SkillCard
              icon={Database}
              title="Databases"
              skills={['SQL Server', 'MySQL', 'PostgreSQL']}
            />
          </div>
        </Section>

        <Section id="education" title="Education" Icon={GraduationCap}>
          {[
            {
              degree:
                'Master of Technology in Computer and Communication engineering',
              school: 'National Kaohsiung University of Science and Technology',
              period: '2022/09 - 2024/01',
              thesis:
                'Assessing the Feasibility of the Stellar Consensus Protocol in Pi Network and Business Model Analysis',
              thesisLink: 'https://hdl.handle.net/11296/7224d3',
              focus: 'Blockchain'
            },
            {
              degree:
                'Bachelor of Technology in Computer and Communication engineering',
              school: 'National Kaohsiung University of Science and Technology',
              period: '2018/09 - 2024/06',
              focus: 'Modern web | Computer Science'
            }
          ].map(({ degree, school, period, thesis, thesisLink, focus }) => (
            <div key={degree} className="mb-6">
              <h3 className="text-xl font-semibold">{degree}</h3>
              <p className="text-green-600">
                {school} | {period}
              </p>
              {thesis && (
                <p>
                  Thesis:{' '}
                  <Link
                    className="hover:text-green-500"
                    href={thesisLink}
                    target="_blank"
                  >
                    &quot;{thesis}&quot;
                  </Link>
                </p>
              )}
              <p>{focus}</p>
            </div>
          ))}
        </Section>

        <Section id="events" title="Web3 hackathons" Icon={Calendar}>
          <ul className="space-y-4">
            {[
              {
                name: '2024 XueDAO hackathon',
                role: 'Frontend engineer',
                result: 'win second place',
                link: 'https://github.com/hollow-leaf/girudo'
              },
              {
                name: '2024 Celestia hackathon',
                role: 'Frontend engineer',
                result: 'win bounty pool',
                link: 'https://github.com/hollow-leaf/Konan'
              },
              {
                name: '2024 ChainLink hackathon',
                role: 'Frontend engineer',
                link: 'https://github.com/hollow-leaf/Konan'
              },
              {
                name: '2024 EthTaipei hackathon',
                role: 'Frontend engineer',
                result: 'win second place',
                link: 'https://github.com/hollow-leaf/Shishimaru'
              },
              {
                name: '2024 Binance BNBChain Q1 hackathon',
                role: 'Frontend engineer',
                result: 'win bounty pool',
                link: 'https://github.com/hollow-leaf/psyduck'
              },
              {
                name: '2023 Taipei blockchain week hackathon',
                role: 'Frontend engineer',
                result: 'win bounty pool',
                link: 'https://github.com/hollow-leaf/psyduck'
              },
              {
                name: '2023 Telegram Ton Blockchain hackathon',
                role: 'Frontend engineer',
                result: 'win bounty pool',
                link: 'https://github.com/hollow-leaf/inazuma'
              },
              {
                name: '2024 Filecoin green Funding the common hackathon',
                role: 'Frontend engineer',
                result: 'win second place',
                link: 'https://github.com/hollow-leaf/inazuma'
              }
            ].map(({ name, role, result, link }) => (
              <li key={name}>
                <h3 className="text-xl font-semibold">
                  {name}{' '}
                  <Link
                    className="text-sm font-semibold hover:text-green-500"
                    href={link}
                    target="_blank"
                  >
                    {link}
                  </Link>
                </h3>
                <p className="text-green-600">
                  {role}
                  {result ? ` | ${result}` : ''}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="projects" title="Select Projects" Icon={Leaf}>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Blockchain Development Kit',
                link: 'https://github.com/cathayddt/bdk',
                description:
                  'BDK simplifies blockchain creation (using Hyperledger Fabric/Quorum) with command-line tools and npm packages, making network management and monitoring easier than ever. Interactive prompts are supported, triggered with -i or --interactive alongside all CLI commands.'
              },
              {
                title: 'XueDAO office website',
                link: 'https://github.com/crypto0627/xd-website',
                description:
                  "XueDAO is Taiwan's pioneering community for student developers, created by students, for students. Our vision is to build the ultimate blockchain learning hub, showing the world that Taiwanese students can BUIDL !"
              },
              {
                title: 'Web3 Frontend template',
                link: 'https://github.com/XueDAOTW/xd-template-eth-web',
                description:
                  'Web3 Frontend Workshop template for xuedao hackathon, use Next.js 14 | React 18 | TailwindCSS | TypeScript | Vercel | Wagmi | Alchemy | Ethers.js'
              }
            ].map(({ title, link, description }) => (
              <Card key={title} className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {title}{' '}
                    <Link
                      className="text-sm font-semibold hover:text-green-500"
                      href={link}
                      target="_blank"
                    >
                      {link}
                    </Link>
                  </h3>
                  <p>{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      </div>

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

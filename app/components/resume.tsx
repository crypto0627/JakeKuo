'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Leaf, BookOpen, Briefcase, Code, GraduationCap, Calendar, FileText, Menu, X, Cpu, Bitcoin, Database, Cloud, Server, Star, DatabaseBackup, Github, Linkedin, Instagram, Send } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const NavLinks = () => (
    <>
      <a href="#profile" className="block py-2 hover:text-green-200" onClick={() => setIsMenuOpen(false)}>Profile</a>
      <a href="#experience" className="block py-2 hover:text-green-200" onClick={() => setIsMenuOpen(false)}>Experience</a>
      <a href="#skills" className="block py-2 hover:text-green-200" onClick={() => setIsMenuOpen(false)}>Skills</a>
      <a href="#education" className="block py-2 hover:text-green-200" onClick={() => setIsMenuOpen(false)}>Education</a>
      <a href="#events" className="block py-2 hover:text-green-200" onClick={() => setIsMenuOpen(false)}>Web3 events</a>
      <a href="#projects" className="block py-2 hover:text-green-200" onClick={() => setIsMenuOpen(false)}>Projects</a>
    </>
  )

  const SocialIcons = () => (
    <div className="flex space-x-4">
      <Link href="https://github.com/crypto0626" target="_blank" rel="noopener noreferrer">
        <Github className="w-5 h-5 hover:text-green-200" />
      </Link>
      <Link href="https://www.linkedin.com/in/lai-hung-kuo-83b186245/" target="_blank" rel="noopener noreferrer">
        <Linkedin className="w-5 h-5 hover:text-green-200" />
      </Link>
      <Link href="https://www.instagram.com/klhong_0627/" target="_blank" rel="noopener noreferrer">
        <Instagram className="w-5 h-5 hover:text-green-200" />
      </Link>
      <Link href="https://t.me/JakeKuo" target="_blank" rel="noopener noreferrer">
        <Send className="w-5 h-5 hover:text-green-200" />
      </Link>
    </div>
  )

  return (
    <div className="min-h-screen bg-green-50 text-green-900 font-sans relative overflow-hidden">
      {/* Background Icons */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <Cpu className="absolute top-1/4 left-1/4 w-24 h-24 text-green-800" />
        <Bitcoin className="absolute top-3/4 left-1/3 w-32 h-32 text-green-800" />
        <Database className="absolute top-1/2 right-1/4 w-28 h-28 text-green-800" />
        <Cloud className="absolute bottom-1/4 right-1/3 w-20 h-20 text-green-800" />
        <Server className="absolute top-1/3 right-1/2 w-24 h-24 text-green-800" />
      </div>

      {/* Navbar */}
      <nav className="bg-green-800 text-white p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-2xl font-bold">Jake Kuo</span>
          <div className="hidden md:flex space-x-4">
            <NavLinks />
          </div>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <div className="relative w-6 h-6">
                  <Menu className={`absolute inset-0 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
                  <X className={`absolute inset-0 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 rotate-90' : 'opacity-0 -rotate-90'}`} />
                </div>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] bg-green-800 text-white">
              <nav className="flex flex-col space-y-4 mt-8">
                <NavLinks />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Profile */}
        <section id="profile" className="mb-12">
          <Card className="bg-white shadow-lg">
            <CardContent className="flex flex-col md:flex-row items-center p-6">
              <Image
                src="/profile.webp"
                alt="Jake Kuo"
                width={200}
                height={200}
                className="rounded-xl mb-4 md:mb-0 md:mr-6 w-auto h-auto"
                priority
              />
              <div>
                <h1 className="text-3xl font-bold mb-2">Jake Kuo</h1>
                <p className="text-xl mb-4">Frontend engineer | Blockchain</p>
                <p className="mb-4">Hi, This is Jake Kuo from XUEDAO, the first Taiwan’s student blockchain community. I’m a blockchain frontend engineer at XueDAO.</p>
                <p className="mb-4">Website: <Link className="hover:text-green-500" href="https://www.xuedao.xyz" target="_blank">https://www.xuedao.xyz</Link> </p>
                <Button className="mb-4 bg-green-600 hover:bg-green-900">
                  <a href="/JakeKuo-Resume.pdf" target="_blank" download>
                    Download Resume
                  </a>
                </Button>
                <div className="">
                  <SocialIcons />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Work Experience */}
        <section id="experience" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Briefcase className="mr-2" /> Work Experience
          </h2>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <div className="mb-6">
                <h3 className="text-xl font-semibold">XueDAO</h3>
                <p className="text-green-600">Core-contributor | 2024/04 - Present</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Develop and implement web3 project for education programs.</li>
                  <li>Build a official website</li>
                  <li>Conduct frontend workshops for community members</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Cathay Financial Holdings</h3>
                <p className="text-green-600">Blockchain RD Intern | 2023/07 - 2024/02</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Cathay Summer CIP plan</li>
                  <li>Develop blockchain business application</li>
                  <li>Attend web3 hackathon</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Code className="mr-2" /> Skills
          </h2>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-green-100 p-4 rounded-lg">
                  <Leaf className="mb-2" />
                  <h3 className="font-semibold">HTML5 | CSS3 | JavaScript(ES6+) | TypeScript</h3>
                </div>
                <div className="bg-green-100 p-4 rounded-lg">
                  <BookOpen className="mb-2" />
                  <h3 className="font-semibold">TailwindCSS | Shadcn | Material UI</h3>
                </div>
                <div className="bg-green-100 p-4 rounded-lg">
                  <Star className="mb-2" />
                  <h3 className="font-semibold">React.js(18+) | Next.js(13+)</h3>
                </div>
                <div className="bg-green-100 p-4 rounded-lg">
                  <Calendar className="mb-2" />
                  <h3 className="font-semibold">Node.js(16+) | ASP.NET 8 | Python crawler</h3>
                </div>
                <div className="bg-green-100 p-4 rounded-lg">
                  <FileText className="mb-2" />
                  <h3 className="font-semibold">RESTFul API | gRPC | GraphQL | Swagger API | JWT</h3>
                </div>
                <div className="bg-green-100 p-4 rounded-lg">
                  <Briefcase className="mb-2" />
                  <h3 className="font-semibold">Blockchain | Solidity | web3.js/Ether.js | Hardhat | Openzeppelin ERC-20 721 1155 | IPFS</h3>
                </div>
                <div className="bg-green-100 p-4 rounded-lg">
                  <GraduationCap className="mb-2" />
                  <h3 className="font-semibold">Git version control | Linux shell script | MacOS homebrew | Windows wsl2 | Docker | Cloudflare | AWS</h3>
                </div>
                <div className="bg-green-100 p-4 rounded-lg">
                  <DatabaseBackup className="mb-2" />
                  <h3 className="font-semibold">SQL server | MySQL | Postgres</h3>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Education */}
        <section id="education" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <GraduationCap className="mr-2" /> Education
          </h2>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <div className="mb-6">
                <h3 className="text-xl font-semibold">Master of Technology in Computer and Communication engineering</h3>
                <p className="text-green-600">National Kaohsiung University of Science and Technology | 2022/09 - 2024/01</p>
                <p>Thesis: <Link className="hover:text-green-500" href="https://hdl.handle.net/11296/7224d3" target="_blank">&quot;Assessing the Feasibility of the Stellar Consensus Protocol in Pi Network and Business Model Analysis&quot;</Link></p>
                <p>Blockchain</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Bachelor of Technology in Computer and Communication engineering</h3>
                <p className="text-green-600">National Kaohsiung University of Science and Technology | 2018/09 - 2024/06</p>
                <p>Modern web | Computer Science</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Events */}
        <section id="events" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Calendar className="mr-2" /> Web3 hackathons
          </h2>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <ul className="space-y-4">
                <li>
                  <h3 className="text-xl font-semibold">2024 XueDAO hackathon <Link className="text-sm font-semibold hover:text-green-500" href="https://github.com/hollow-leaf/girudo" target="_blank">https://github.com/hollow-leaf/girudo</Link></h3>
                  <p className="text-green-600">Frontend engineer | win second place</p>
                  <p>Participate and Contribute to the DAO Community</p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold">2024 Celestia hackathon <Link className="text-sm font-semibold hover:text-green-500" href="https://github.com/hollow-leaf/Konan" target="_blank">https://github.com/hollow-leaf/Konan</Link></h3>
                  <p className="text-green-600">Frontend engineer | win bounty pool</p>
                  <p>Konan is an innovative GameFi game that elevates the concept of decentralized dynamic NFTs (dNFTs) to new heights. In this game, players can log in using OAuth or a Web3 wallet to randomly draw a unique NFT. Through a gacha-like mechanism, players gradually unlock equipment or backgrounds for their NFT characters, obtaining NFTs of varying values in the process!</p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold">2024 ChainLink hackathon <Link className="text-sm font-semibold hover:text-green-500" href="https://github.com/hollow-leaf/Konan" target="_blank">https://github.com/hollow-leaf/Konan</Link></h3>
                  <p className="text-green-600">Frontend engineer</p>
                  <p>ChainLink VRF：Utilizes verifiable random functions to generate randomness, ensuring fairness and transparency in the gacha unlock process.</p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold">2024 EthTaipei hackathon <Link className="text-sm font-semibold hover:text-green-500" href="https://github.com/hollow-leaf/Shishimaru" target="_blank">https://github.com/hollow-leaf/Shishimaru</Link></h3>
                  <p className="text-green-600">Frontend engineer | win second place</p>
                  <p>Turn every step into love, letting your pets lead you to more rewards.</p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold">2024 Binance BNBChain Q1 hackathon <Link className="text-sm font-semibold hover:text-green-500" href="https://github.com/hollow-leaf/psyduck" target="_blank">https://github.com/hollow-leaf/psyduck</Link></h3>
                  <p className="text-green-600">Frontend engineer | win bounty pool</p>
                  <p>Psyduck is a decentralized application for live streaming donations that not only integrates the web3 and web2 worlds, but also provides more donation types for live streaming viewers.</p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold">2023 Taipei blockchain week hackathon <Link className="text-sm font-semibold hover:text-green-500" href="https://github.com/hollow-leaf/psyduck" target="_blank">https://github.com/hollow-leaf/psyduck</Link></h3>
                  <p className="text-green-600">Frontend engineer | win bounty pool</p>
                  <p>Psyduck provides a website and Chrome extension for live streamer to create NFTs and donate the tip.</p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold">2023 Telegram Ton Blockchain hackathon <Link className="text-sm font-semibold hover:text-green-500" href="https://github.com/hollow-leaf/inazuma" target="_blank">https://github.com/hollow-leaf/inazuma</Link></h3>
                  <p className="text-green-600">Frontend engineer | win bounty pool</p>
                  <p>INAZUMA,the gateway to decentralized green energy.We&apos;re revolutionizing eco-friendly energy distribution.The purpose of Inazuma is to encourage the use of green energy among humans, reduce CO2 emissions, and protect environment.</p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold">2024 Filecoin green Funding the common hackathon <Link className="text-sm font-semibold hover:text-green-500" href="https://github.com/hollow-leaf/inazuma" target="_blank">https://github.com/hollow-leaf/inazuma</Link></h3>
                  <p className="text-green-600">Frontend engineer | win second place</p>
                  <p>INAZUMA,the gateway to decentralized green energy.We&apos;re revolutionizing eco-friendly energy distribution.The purpose of Inazuma is to encourage the use of green energy among humans, reduce CO2 emissions, and protect environment.</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Select Projects */}
        <section id="projects" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Leaf className="mr-2" /> Select Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">XueDAO office website <Link className="text-sm font-semibold hover:text-green-500" href="https://github.com/crypto0627/xd-website" target="_blank">https://github.com/crypto0627/xd-website</Link></h3>
                <p>XueDAO is Taiwan&apos;s pioneering community for student developers, created by students, for students. Our vision is to build the ultimate blockchain learning hub, showing the world that Taiwanese students can BUIDL !</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Web3 Frontend template <Link className="text-sm font-semibold hover:text-green-500" href="https://github.com/XueDAOTW/xd-template-eth-web" target="_blank">https://github.com/XueDAOTW/xd-template-eth-web</Link></h3>
                <p>The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Jake Kuo. All rights reserved.</p>
          <p className="mt-2">Dedicated to web frontend and web3 field through education.</p>
        </div>
      </footer>
    </div>
  )
}
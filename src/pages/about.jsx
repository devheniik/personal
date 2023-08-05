import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/photos/image-1.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Yevhenii Kymryzy</title>
        <meta
          name="description"
          content="I’m Yevhenii Kyrmyzy. I'm Ukrainian 🇺🇦."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              My name is Yevhenii Kyrmyzy. I am  🇺🇦, and I am a software engineer.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I’ve loved making things for as long as I can remember, I learned the multiplication table when I was 4 years old.
                Wrote my first program when I was in 6th grade. Win the first programming competition when I was 14 years old.
                Take part in the national programming competition.
              </p>
              <p>
                On my 12th birthday, I received a present from my parents - a tablet. I was very happy and already knew that I was going to be a programmer.
                In 2 weeks I learned HTML and CSS and made my first website. Later I started to learn JavaScript and C++ for Olympiads.
                I became the best in my school in programming and I was very proud of that. I was so happy when I was doing programming and I still am.
              </p>
              <p>
                When I become older I started to learn Vue.js and Laravel.
                I made a lot of projects with them. I create sites for my friends and for myself.
                For my team, freelancing, and for my own pleasure.

              </p>
              <p>
                Today, I’m the Team Lead and Product designer of the vantazh.com.
                I am responsible for the development of the project and the design of the product.
                We develop a platform for the transportation of raw materials and goods in Ukraine.
                I am very proud of my team and our product. We are doing a great job.
              </p>
              <p>
                I am also still learning new technologies and programming languages, to resolve new problems and to make new projects.
                I all time try to make my code better and better. I am very happy when I see that my code is working and doing what I want.
                I’m always looking for new peoples and project with whom I can work and learn something new. Creating new projects and solving new problems is my passion.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/YKyrmyzy" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://www.instagram.com/yevhenii_kyrmyzy/" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://github.com/devheniik" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/yevhenii-kyrmyzy-891429241/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:yevhenii_kymryzy@icloud.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                yevhenii_kymryzy@icloud.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

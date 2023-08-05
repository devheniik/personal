import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Spencer Sharp</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="14” MacBook Pro, M2 Pro, 16GB RAM (2023)">
              I use an Apple-based 14” MacBook Pro to this and the
              difference is night and day. I’ve never heard the fans turn on a
              single time, even under the incredibly heavy loads I put it
              through with our various launch simulations.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="PhpStorm">
              PhpStorm is a powerful IDE for PHP development created by JetBrains. I use it because it provides code completion, debugging, built-in terminal and database tools, integration with version control systems, and many other features that boost my productivity when writing PHP code. The intelligent code editor makes it easy to navigate large codebases and refactor code safely.
            </Tool>
            <Tool title="WebStorm">
              WebStorm is a robust IDE for web development created by JetBrains. I use it because of its excellent support for JavaScript, TypeScript, CSS, HTML, Node.js, Angular, React, Vue.js, and more. The code completion, debugging, and convenient GUI tools like built-in terminal help me develop complex web apps efficiently. WebStorm's integration with version control systems like Git accelerates my workflow.
            </Tool>
            <Tool title="Ray">
              Spatie Ray is a debugging tool for PHP applications that helps me quickly identify issues. I use it to get insights into request/response data, logged events, executed queries, queued jobs, and more. The interactive dashboard and tailable logs accelerate debugging workflows.            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for the entire company. Never would have
              expected the collaboration features to be the real hook.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Notion">
              Notion is an all-in-one workspace for notes, tasks, wikis, and databases that I use to organize my life. Its flexible drag-and-drop interface allows me to customize it to fit my needs. I can collaborate with others and access it from any device, enhancing my productivity.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}

import { Layout, Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'

function Home() {
  return (
    <Page className="flex flex-col px-5 md:px-0 gap-12">
      <section className="flex flex-col gap-6">
        <Text variant="h1">🧙 Professor König to serve you</Text>
        <Text className="text-zinc-600">
          Maths and computer science for everyone.
        </Text>
      </section>

      <section className="flex flex-col gap-3">
        <Text variant="h2">AI Chat Bot:</Text>
        <div className="lg:w-2/3">
          <Chat />
        </div>
      </section>
    </Page>
  )
}

Home.Layout = Layout

export default Home

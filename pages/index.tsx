import { Layout, Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'

function Home() {
  return (
    <Page className="flex flex-col px-5 md:px-0 gap-12">
      <section className="flex flex-col gap-6">
        <Text variant="h1">🧙 Professeur König pour vous servir</Text>
        <Text className="text-zinc-600">
          Mathématiques et informatique pour tous.
        </Text>
      </section>

      <section className="flex flex-col gap-3">
        <Text variant="h2">Discussion:</Text>
        <div className="lg:w-2/3">
          <Chat />
        </div>
      </section>
    </Page>
  )
}

Home.Layout = Layout

export default Home

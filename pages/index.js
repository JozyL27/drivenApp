import P from '../components/paragraph'
import Post from '../components/post'
import Checkerboard from '../components/Checkerboard'

export default function Home() {
  return (
    <div className="main">
      <Checkerboard />
      <style jsx>{`
        .main {
          padding: 0px;
          margin: 0px;
        }
      `}</style>
    </div>
  )
}

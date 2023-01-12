import prepareContent from '../helpers/prepareContent'

function Background() {
  const content = prepareContent()

  return <video
      autoPlay
      loop
      muted
      className="w-screen h-screen object-cover -z-10 absolute top-0"
    >
      <source
        src={content('/videos/700ie-drone-video-snippet_bLGz3NnO.mp4')}
        type="video/mp4"
      />
    </video>
}

export default Background


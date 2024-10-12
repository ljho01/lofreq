import "./player.css"

export default function Home() {
  return (
    <div>
      <iframe
        allow="autoplay *; encrypted-media *;"
        className="bg-transparent w-full absolute left-[50%] translate-x-[-50%] max-w-[400px] top-[50%] translate-y-[-50%]"
        frameborder="0"
        height="450"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.music.apple.com/kr/playlist/24-3/pl.u-RRbVv11TeMl12ky?l=en"
      />
    </div>
  );
}

import "./Button.css"

export default function Button({text} : { text: string }) {
  return (
    <div>
      <button className="button">{text}</button>
    </div>
  )
}

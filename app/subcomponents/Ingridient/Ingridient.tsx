import "./Ingridient.css"

export default function Ingridient({text}) {
  return (
    <li className="ingridient">
        <div className="ingridient-name">{text}</div>
        <div className="ingridient-circle"></div>
    </li>
  )
}

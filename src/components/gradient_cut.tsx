import { GradientCutPropTypes } from "../types/gradient_cut_types"

export default function GradientCut({ position_top, position_bottom }: GradientCutPropTypes) {
  return (
    <div className={`gradient-cut ${position_top ? 'position-top' : ''} ${position_bottom ? 'position-bottom' : ''}`}></div>
  )
}

import {memo} from 'react'

const Beta = () => {
    console.log("mai baar baar koodunga")
  return (
    <div>
        <p>Hii bro i am child of this baap</p>
    </div>
  )
}

export default memo(Beta);
import { useState } from "react";

export const useCounter = (value, value2) => {

    const [count, setCount] = useState(value);
    const [counter, setCounter] = useState(value2);
    const [liked, setLiked] = useState(false)
    const [disliked, setDisliked] = useState(false)

    const handleAddL = () => {
        if (liked == false) {
            setCount(count + 1)
            if (counter != 0) { setCounter(counter - 1) }
        }
        setLiked(true)
        setDisliked(false)
    }

    const handleAddD = () => {
        if (disliked == false) {
            setCounter(counter + 1)
            if (count != 0) { setCount(count - 1) }
        }
        setLiked(false)
        setDisliked(true)
    }

    return {
        likes: count,
        dislikes: counter,
        addLike: handleAddL,
        addDislike: handleAddD
    }
}
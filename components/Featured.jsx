import Image from 'next/image'
import styles from '@/s_module/Featured.module.scss'
import { useState } from 'react'

const Featured = () => {
	const images = ['/img/featured.png', '/img/featured2.png', '/img/featured3.png']
	const [index, setIndex] = useState(0)

	const handleArrow = direction => {
		if (direction === 'left') {
			setIndex(index === 0 ? images.length - 1 : index - 1)
		} else {
			setIndex(index === images.length - 1 ? 0 : index + 1)
		}
	}

	return (
		<div className={styles.container}>
			<div
				className={styles.arrowContainer}
				style={{ left: 0 }}
				onClick={() => handleArrow('left')}
			>
				<Image src="/img/arrowl.png" alt="" layout="fill" />
			</div>
			<div className={styles.wrapper} style={{ transform: `translatex(${-100 * index}vw)` }}>
				{images.map((img, i) => (
					<div className={styles.imgContainer} key={i}>
						<Image src={img} alt="" layout="fill" objectFit="contain" />
					</div>
				))}
			</div>
			<div
				className={styles.arrowContainer}
				style={{ right: 0 }}
				onClick={() => handleArrow('right')}
			>
				<Image src="/img/arrowr.png" alt="" layout="fill" />
			</div>
		</div>
	)
}

export default Featured

import styles from '@/s_module/AddButton.module.scss'

const AddButton = ({ setClose }) => {
	return (
		<button className={styles.mainAddButton} onClick={() => setClose(false)}>
			Add New Pizza
		</button>
	)
}

export default AddButton

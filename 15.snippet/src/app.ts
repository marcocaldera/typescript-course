type ModalProps = { children: any; isVisible: boolean; test: boolean }

/**
 * i: Tutte le prop di ModalProps diventano opzionali e le uniche obbligatorie sono quelle
 * i: dentro il Pick
 */
type OptionalModalProps = Partial<ModalProps> &
	Pick<ModalProps, 'children' | 'isVisible'>

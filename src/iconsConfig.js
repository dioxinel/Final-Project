import React from 'react';

export const iconsConfig = {
	logo: ({ ...props }) => (
		<svg
			width='102'
			height='42'
			viewBox='0 0 102 42'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M52.0566 3.28246C52.0566 4.01908 52.3241 4.66523 52.8462 5.19508C53.381 5.72493 54.005 5.99631 54.7308 5.99631C55.4566 5.99631 56.0933 5.72493 56.6154 5.19508C57.1375 4.66523 57.405 4.01908 57.405 3.28246C57.405 2.54585 57.1375 1.8997 56.6154 1.36985C56.0933 0.840003 55.4566 0.568619 54.7308 0.568619C54.005 0.568619 53.3683 0.840003 52.8462 1.36985C52.3241 1.8997 52.0566 2.54585 52.0566 3.28246ZM52.6679 30.1237C52.6679 30.7182 52.8589 31.2222 53.2536 31.6228C53.6484 32.0234 54.145 32.2172 54.7308 32.2172C55.3548 32.2172 55.8514 32.0234 56.2334 31.6228C56.6154 31.2351 56.8065 30.7311 56.8065 30.1237V11.7729C56.8065 11.1397 56.6154 10.6357 56.2334 10.248C55.8514 9.86031 55.3548 9.66646 54.7308 9.66646C54.145 9.66646 53.6484 9.86031 53.2536 10.248C52.8589 10.6357 52.6679 11.1397 52.6679 11.7729V30.1237Z'
				fill='white'
			/>
			<path
				d='M79.32 30.4855C79.32 31.0929 79.078 31.5969 78.5942 32.0105C78.1867 32.3465 77.7537 32.5015 77.2953 32.5015C76.6968 32.5015 76.2129 32.256 75.8309 31.7649L68.114 22.0726L66.0765 23.8818V30.1883C66.0765 30.7957 65.8983 31.2868 65.529 31.6486C65.1597 32.0234 64.6758 32.2043 64.09 32.2043C63.4915 32.2043 63.0076 32.0234 62.6511 31.6486C62.2818 31.2738 62.1035 30.7957 62.1035 30.1883V2.016C62.1035 1.40862 62.2818 0.917538 62.6511 0.555692C63.0204 0.180923 63.4915 0 64.09 0C64.6885 0 65.1724 0.180923 65.529 0.555692C65.8983 0.930462 66.0765 1.42154 66.0765 2.016V18.8031L75.9455 9.86031C76.302 9.49846 76.7222 9.33046 77.2061 9.33046C77.7792 9.33046 78.2376 9.55015 78.5942 9.98954C78.9507 10.3514 79.1162 10.7778 79.1162 11.2689C79.1162 11.8505 78.8998 12.3157 78.4668 12.6775L70.9919 19.4363L78.8743 29.2578C79.1672 29.5809 79.32 29.9945 79.32 30.4855Z'
				fill='white'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M96.5761 10.9717C98.2697 11.9409 99.5941 13.2978 100.562 15.0295C101.517 16.7612 102.001 18.7385 102.001 20.9742C102.001 23.1711 101.517 25.1354 100.575 26.8671C99.6323 28.5988 98.3079 29.9557 96.6143 30.9249C94.9207 31.8942 92.9851 32.3852 90.8203 32.3852C88.6555 32.3852 86.7199 31.9071 85.0135 30.9249C83.3072 29.9557 81.9701 28.5988 81.0278 26.8671C80.0727 25.1354 79.6016 23.1711 79.6016 20.9742C79.6016 18.7385 80.0855 16.7612 81.0278 15.0295C81.9828 13.2978 83.3072 11.9538 85.0135 10.9717C86.7199 10.0025 88.6555 9.51138 90.8203 9.51138C92.9596 9.51138 94.8825 10.0025 96.5761 10.9717ZM82.9379 20.9354C82.9379 25.3551 86.4652 28.9218 90.8076 28.9218C95.1499 28.9218 98.6645 25.3551 98.6772 20.9354C98.6772 16.5157 95.1499 12.9489 90.8076 12.9489C86.4525 12.9489 82.9379 16.5286 82.9379 20.9354Z'
				fill='white'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M43.0917 10.9717C44.7854 11.9409 46.1097 13.2978 47.0775 15.0295C48.0325 16.7612 48.5164 18.7385 48.5037 20.9742C48.5037 23.1711 48.0198 25.1354 47.0775 26.8671C46.1352 28.5988 44.8108 29.9557 43.1172 30.9249C41.4236 31.8942 39.488 32.3852 37.3232 32.3852C35.1584 32.3852 33.2228 31.9071 31.5164 30.9249C31.0707 30.6794 30.6505 30.3951 30.2558 30.0849V39.7772C30.2558 40.4105 30.0648 40.9145 29.6827 41.3022C29.3007 41.6898 28.8041 41.8837 28.1801 41.8837C27.5943 41.8837 27.0977 41.6898 26.703 41.3022C26.3082 40.9145 26.1172 40.4105 26.1172 39.7772V20.9742C26.1172 18.7385 26.6011 16.7612 27.5434 15.0295C28.4985 13.2978 29.8228 11.9538 31.5292 10.9717C32.9936 10.1317 34.649 9.65354 36.47 9.53723H36.5337H36.5719C36.8011 9.52431 37.0558 9.51138 37.2977 9.51138H37.3359C39.4752 9.51138 41.3981 10.0025 43.0917 10.9717ZM29.4535 20.9354C29.4535 25.3551 32.9809 28.9218 37.3232 28.9218C41.6655 28.9218 45.1928 25.3551 45.1928 20.9354C45.1928 16.5157 41.6655 12.9489 37.3232 12.9489C32.9681 12.9489 29.4535 16.5286 29.4535 20.9354Z'
				fill='white'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M16.8854 11.0105C18.579 12.0185 19.9161 13.3883 20.9094 15.1329C21.9026 16.8775 22.3865 18.816 22.3738 20.9612V30.1625C22.3738 30.7569 22.1828 31.2609 21.788 31.6615C21.406 32.0622 20.9094 32.256 20.3109 32.256C19.7251 32.256 19.2285 32.0622 18.8337 31.6615C18.439 31.2738 18.2479 30.7698 18.2479 30.1625V30.0849C17.8659 30.3951 17.4457 30.6665 17.0127 30.9249C15.3191 31.8942 13.3835 32.3852 11.2187 32.3852C9.05393 32.3852 7.11835 31.9071 5.41198 30.9249C3.70562 29.9557 2.36854 28.5988 1.42622 26.8671C1.41985 26.8606 1.41667 26.8509 1.41348 26.8412C1.4103 26.8315 1.40712 26.8218 1.40075 26.8154L1.36255 26.8025C0.993258 26.0788 0.700375 25.3292 0.483895 24.5538C0.464794 24.4763 0.445693 24.402 0.426592 24.3277C0.407491 24.2534 0.38839 24.1791 0.369288 24.1015C0.362921 24.0692 0.356554 24.0402 0.350187 24.0111C0.34382 23.982 0.337453 23.9529 0.331086 23.9206C0.28015 23.7268 0.241949 23.52 0.203747 23.3132L0.203745 23.3132C0.203745 23.3003 0.200562 23.2874 0.197378 23.2745C0.194195 23.2615 0.191011 23.2486 0.191011 23.2357C0.152809 23.0031 0.114607 22.7705 0.0891386 22.5378V22.512C0.0636704 22.2665 0.0382022 22.0209 0.0254682 21.7625V21.7495C0.0127341 21.4911 0 21.2197 0 20.9612C0 18.816 0.483895 16.8775 1.46442 15.1329C2.44494 13.3883 3.79476 12.0185 5.51386 11.0105C7.23296 10.0154 9.13034 9.51138 11.2187 9.51138C13.3071 9.51138 15.1918 10.0025 16.8854 11.0105ZM3.3236 20.9354C3.3236 25.3551 6.85094 28.9218 11.1933 28.9218C15.5356 28.9218 19.0629 25.3551 19.0629 20.9354C19.0629 16.5157 15.5483 12.9489 11.1933 12.9489C6.8382 12.9489 3.3236 16.5286 3.3236 20.9354Z'
				fill='white'
			/>
		</svg>
	),

	arrow: ({ fill, ...props }) => (
		<svg
			width='13'
			height='8'
			viewBox='0 0 13 8'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M0 1.09091L1.04 0L6.5 5.80364L11.96 0L13 1.09091L6.5 8L0 1.09091Z'
				fill={fill}
			/>
		</svg>
	),
	'header-heart': ({ ...props }) => (
		<svg
			width='18'
			height='17'
			viewBox='0 0 18 17'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M16.3944 1.68343C14.3737 -0.438428 11.1524 -0.555219 9 1.33751C6.84849 -0.554327 3.62717 -0.438428 1.60557 1.68343C0.569717 2.7711 0 4.21628 0 5.75507C0 7.29386 0.569717 8.73993 1.60557 9.82671L8.03972 16.5828C8.30462 16.8609 8.65274 17 9 17C9.34726 17 9.69538 16.8609 9.96028 16.5828L16.3944 9.82671C17.4303 8.73993 18 7.29475 18 5.75507C18 4.21628 17.4303 2.77021 16.3944 1.68343Z'
				fill='white'
			/>
		</svg>
	),
	'header-cart': ({ ...props }) => (
		<svg
			width='18'
			height='18'
			viewBox='0 0 18 18'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M5.4 14.4C4.41 14.4 3.609 15.21 3.609 16.2C3.609 17.19 4.41 18 5.4 18C6.39 18 7.2 17.19 7.2 16.2C7.2 15.21 6.39 14.4 5.4 14.4ZM0 0V1.8H1.8L5.04 8.631L3.825 10.836C3.681 11.088 3.6 11.385 3.6 11.7C3.6 12.69 4.41 13.5 5.4 13.5H16.2V11.7H5.778C5.652 11.7 5.553 11.601 5.553 11.475L5.58 11.367L6.39 9.9H13.095C13.77 9.9 14.364 9.531 14.67 8.973L17.892 3.132C17.964 3.006 18 2.853 18 2.7C18 2.205 17.595 1.8 17.1 1.8H3.789L2.943 0H0ZM14.4 14.4C13.41 14.4 12.609 15.21 12.609 16.2C12.609 17.19 13.41 18 14.4 18C15.39 18 16.2 17.19 16.2 16.2C16.2 15.21 15.39 14.4 14.4 14.4Z'
				fill='white'
			/>
		</svg>
	),

	cross: ({ ...props }) => (
		<svg
			viewBox='0 0 18 18'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M18 1.81286L16.1871 0L9 7.18714L1.81286 0L0 1.81286L7.18714 9L0 16.1871L1.81286 18L9 10.8129L16.1871 18L18 16.1871L10.8129 9L18 1.81286Z'
				fill='#707070'
			/>
		</svg>
	),
	'shown-pass': ({ ...props }) => (
		<svg
			width='22'
			height='15'
			viewBox='0 0 22 15'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0ZM11 12.5C8.24 12.5 6 10.26 6 7.5C6 4.74 8.24 2.5 11 2.5C13.76 2.5 16 4.74 16 7.5C16 10.26 13.76 12.5 11 12.5ZM11 4.5C9.34 4.5 8 5.84 8 7.5C8 9.16 9.34 10.5 11 10.5C12.66 10.5 14 9.16 14 7.5C14 5.84 12.66 4.5 11 4.5Z'
				fill='#707070'
			/>
		</svg>
	),

	'hided-pass': ({ ...props }) => (
		<svg
			width='22'
			height='19'
			viewBox='0 0 22 19'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M11 4C13.76 4 16 6.24 16 9C16 9.65 15.87 10.26 15.64 10.83L18.56 13.75C20.07 12.49 21.26 10.86 21.99 9C20.26 4.61 15.99 1.5 10.99 1.5C9.59 1.5 8.25 1.75 7.01 2.2L9.17 4.36C9.74 4.13 10.35 4 11 4ZM1 1.27L3.28 3.55L3.74 4.01C2.08 5.3 0.78 7.02 0 9C1.73 13.39 6 16.5 11 16.5C12.55 16.5 14.03 16.2 15.38 15.66L15.8 16.08L18.73 19L20 17.73L2.27 0L1 1.27ZM6.53 6.8L8.08 8.35C8.03 8.56 8 8.78 8 9C8 10.66 9.34 12 11 12C11.22 12 11.44 11.97 11.65 11.92L13.2 13.47C12.53 13.8 11.79 14 11 14C8.24 14 6 11.76 6 9C6 8.21 6.2 7.47 6.53 6.8ZM10.84 6.02L13.99 9.17L14.01 9.01C14.01 7.35 12.67 6.01 11.01 6.01L10.84 6.02Z'
				fill='#727272'
			/>
		</svg>
	),

	'add-to-favorites': ({ ...props }) => (
		<svg
			width='20'
			height='19'
			viewBox='0 0 20 19'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M17.3944 2.68343C15.3737 0.561572 12.1524 0.444781 10 2.33751C7.84849 0.445673 4.62717 0.561572 2.60557 2.68343C1.56972 3.7711 1 5.21628 1 6.75507C1 8.29386 1.56972 9.73993 2.60557 10.8267L9.03972 17.5828C9.30462 17.8609 9.65274 18 10 18C10.3473 18 10.6954 17.8609 10.9603 17.5828L17.3944 10.8267C18.4303 9.73993 19 8.29475 19 6.75507C19 5.21628 18.4303 3.77021 17.3944 2.68343Z'
				stroke='#707070'
			/>
		</svg>
	),

	'remove-from-favorites': ({ ...props }) => (
		<svg
			width='18'
			height='17'
			viewBox='0 0 18 17'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M9 17L7.695 15.7771C3.06 11.4507 0 8.59727 0 5.09537C0 2.24196 2.178 0 4.95 0C6.516 0 8.019 0.750409 9 1.93624C9.981 0.750409 11.484 0 13.05 0C15.822 0 18 2.24196 18 5.09537C18 8.59727 14.94 11.4507 10.305 15.7864L9 17Z'
				fill='#FD7114'
			/>
		</svg>
	),

	'add-to-favorites-tick': ({ ...props }) => (
		<svg
			width='19'
			height='13'
			viewBox='0 0 19 13'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M19 1.08765L17.846 0L6.65537 10.7988L1.15395 5.49004L0 6.57769L6.65537 13L19 1.08765Z'
				fill='white'
			/>
		</svg>
	),

	'trash-can': ({ ...props }) => (
		<svg
			width='26'
			height='26'
			viewBox='0 0 26 26'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M24.9488 3.86486H18.9569V2.88108C18.9218 1.3 17.6604 0.0351351 16.0836 0H9.91644C8.33962 0.0351351 7.07817 1.3 7.04313 2.88108V3.86486H1.05121C0.455526 3.86486 0 4.32162 0 4.91892C0 5.51622 0.455526 5.97297 1.05121 5.97297H2.90836L4.02965 23.2946C4.09973 24.8054 5.32615 26 6.83288 26H19.1671C20.6739 26 21.9003 24.8054 21.9704 23.2946L23.0916 5.97297H24.9488C25.5445 5.97297 26 5.51622 26 4.91892C26 4.32162 25.5445 3.86486 24.9488 3.86486ZM11.248 19.6757C11.248 20.273 10.7925 20.7297 10.1968 20.7297C9.60108 20.7297 9.14555 20.273 9.14555 19.6757V10.1541C9.14555 9.55676 9.60108 9.1 10.1968 9.1C10.7925 9.1 11.248 9.55676 11.248 10.1541V19.6757ZM16.8544 19.6757C16.8544 20.273 16.3989 20.7297 15.8032 20.7297C15.2075 20.7297 14.752 20.273 14.752 19.6757V10.1541C14.752 9.55676 15.2075 9.1 15.8032 9.1C16.3989 9.1 16.8544 9.55676 16.8544 10.1541V19.6757ZM16.8544 3.86486H9.14555V2.88108C9.18059 2.45946 9.49596 2.14324 9.91644 2.10811H16.0836C16.504 2.14324 16.8194 2.45946 16.8544 2.88108V3.86486Z'
				fill='#DEDEE0'
			/>
		</svg>
	),

	'search-icon': ({ ...props }) => (
		<svg
			width='20'
			height='20'
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M11.75 13.5V13.6037L11.8234 13.677L16.8234 18.667L17.0002 18.8434L17.1768 18.6668L18.6668 17.1768L18.8434 17.0002L18.667 16.8234L13.677 11.8234L13.6037 11.75H13.5H13H12.8109L12.7705 11.7111C13.6973 10.5539 14.25 9.08773 14.25 7.5C14.25 3.77193 11.2281 0.75 7.5 0.75C3.77193 0.75 0.75 3.77193 0.75 7.5C0.75 11.2281 3.77193 14.25 7.5 14.25C9.08773 14.25 10.5539 13.6973 11.7111 12.7705L11.75 12.8109V13.5ZM7.5 11.75C5.14807 11.75 3.25 9.85193 3.25 7.5C3.25 5.14807 5.14807 3.25 7.5 3.25C9.85193 3.25 11.75 5.14807 11.75 7.5C11.75 9.85193 9.85193 11.75 7.5 11.75Z'
				fill='#727272'
				stroke='#727272'
				strokeWidth='0.5'
			/>
		</svg>
	),

	'categories-icon': ({ ...props }) => (
		<svg
			width='17'
			height='14'
			viewBox='0 0 17 14'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M0 9H4V5H0V9ZM0 14H4V10H0V14ZM0 4H4V0H0V4ZM5 9H17V5H5V9ZM5 14H17V10H5V14ZM5 0V4H17V0H5Z'
				fill='#727272'
			/>
		</svg>
	),

	'sort-icon': ({ ...props }) => (
		<svg
			width='14'
			height='18'
			viewBox='0 0 14 18'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M12 0H2C0.9 0 0.0100002 0.9 0.0100002 2L0 18L7 15L14 18V2C14 0.9 13.1 0 12 0Z'
				fill='#727272'
			/>
		</svg>
	),
};

import appConfig from '../../config.json';
import { Box, Text, TextField, Button, PhotoArea, Title } from '../index';

function Login ({username}) {
  return (
		<Box
		styleSheet={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			flexDirection: {
				xs: 'column',
				sm: 'row',
			},
			width: '100%', maxWidth: '700px',
			borderRadius: '5px', padding: '32px', margin: '16px',
			boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
			backgroundColor: appConfig.theme.colors.neutrals[700],
		}}
	>
		<Box
			as="form"
			styleSheet={{
				display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
				width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
			}}
		>
			<Title tag="h2">Boas vindas de volta!</Title>
			<Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
				{appConfig.name}
			</Text>

			<TextField
				fullWidth
				textFieldColors={{
					neutral: {
						textColor: appConfig.theme.colors.neutrals[200],
						mainColor: appConfig.theme.colors.neutrals[900],
						mainColorHighlight: appConfig.theme.colors.primary[500],
						backgroundColor: appConfig.theme.colors.neutrals[800],
					},
				}}
			/>
			<Button
				type='submit'
				label='Entrar'
				fullWidth
				buttonColors={{
					contrastColor: appConfig.theme.colors.neutrals["000"],
					mainColor: appConfig.theme.colors.primary[500],
					mainColorLight: appConfig.theme.colors.primary[400],
					mainColorStrong: appConfig.theme.colors.primary[600],
				}}
			/>
		</Box>
		<PhotoArea username={username} />
	</Box>
	)
}
export default Login;
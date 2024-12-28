// Update this //
const ENDPOINT = "enp_123456";

export default function Page() {
	return (
		<form method="post" action={`https://api.formizee.com/v1/f/${ENDPOINT}`}>
			<label htmlFor="name">
				Name
				<input id="name" autoComplete="name" name="name" />
			</label>
			<label htmlFor="email">
				Email
				<input id="email" autoComplete="email" name="email" />
			</label>
			<button>Submit</button>
		</form>
	);
}

return (
	<form
		data-netlify="true"
		name="contact"
		method="post"
		onSubmit={handleSubmit}
	>
		<input type="hidden" name="form-name" value="contact" />
		<label>
			Name:
			<input name="name" type="text" onChange={handleChange} />
		</label>
		<input type="submit" />
	</form>
);

<input type="hidden" name="form-name" value="template-contactform" />

return (
	<form
		data-netlify="true"
		name="template-contactform"
		method="post"
		onSubmit={handleSubmit}
	>
		<input type="hidden" name="form-name" value="template-contactform" />
		<label>
			Name:
			<input name="template-contactform-name" type="text" onChange={handleChange} />
		</label>
		<input type="submit" />
	</form>
);

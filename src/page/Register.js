function Register () {
    return /*html*/`
        <form action="" id="register-form">
        <h2>Register</h2>
        <div class="mb-3 form-gruop">
        <label for="email" class="form-label">Email</label>
        <input type="email" name="email" class="form-control" />
        </div>

        <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" name="password" class="form-control" />
        </div>
        <div class="mb-3">
        <button type="submit" class="btn btn-primary">Register</button>
        </div>
    </form>
    `
  }
export default Register;
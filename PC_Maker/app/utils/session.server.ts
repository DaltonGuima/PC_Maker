/* export async function login({
    password,
    username,
  }: LoginForm) {
    const user = await db.user.findUnique({
      where: { username },
    });
    if (!user) {
      return null;
    }
  
    const isCorrectPassword = await bcrypt.compare(
      password,
      user.passwordHash
    );
    if (!isCorrectPassword) {
      return null;
    }
  
    return { id: user.id, username };
  } */
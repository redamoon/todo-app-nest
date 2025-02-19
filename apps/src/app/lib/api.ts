export const createUser = async (name: string, email: string) => {
  const res = await fetch('http://localhost:3001/users', {
    method: 'POST',  // メソッドを POST に指定
    headers: {
      'Content-Type': 'application/json',  // JSON データを送信
    },
    body: JSON.stringify({ name, email }),  // リクエストボディにユーザー情報を設定
  });

  if (!res.ok) {
    throw new Error('Failed to create user');
  }

  return res.json();
};
'use client';
import Layout from '@/components/layout/layout';
import Input from '@/components/common/input';
import { useState } from 'react';
import type { RegisterFormData } from '@/types/user';
import Card from '@/components/common/card';
import Button from '@/components/common/button';

export default function RegisterPage() {
  const [formData, setFormData] = useState<RegisterFormData>({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [errors, setErrors] = useState<Partial<RegisterFormData>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Handle form submission logic here
    const newErrors: Partial<RegisterFormData> = {};
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    try {
      const res = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error('Error during form submission:', error);
      setErrors((prevErrors) => ({
        ...prevErrors,
        general: 'An error occurred during registration. Please try again.',
      }));
    }
    console.log('Form submitted:', formData);
  };

  return (
    <Layout>
      <Card>
        <div>
          <h1>Register</h1>

          <form onSubmit={handleSubmit}>
            <Input
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              type="email"
              name="email"
              id="email"
              className=""
              errorMessage={errors.email}
            />

            <Input
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              type="text"
              name="username"
              id="username"
              className=""
              errorMessage={errors.username}
            />

            <Input
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              type="password"
              name="password"
              id="password"
              className=""
              errorMessage={errors.password}
            />

            <Button type="submit">Create Account</Button>
          </form>
        </div>
      </Card>
    </Layout>
  );
}

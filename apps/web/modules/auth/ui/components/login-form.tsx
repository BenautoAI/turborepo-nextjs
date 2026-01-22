"use client";

import { Button } from "@workspace/design-system/components/ui/button";
import { Checkbox } from "@workspace/design-system/components/ui/checkbox";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@workspace/design-system/components/ui/form";
import { Input } from "@workspace/design-system/components/ui/input";
import { cn } from "@workspace/design-system/lib/utils";
import Link from "next/link";
import { useForm } from "react-hook-form";

interface LoginFormValues {
	email: string;
	password: string;
	rememberMe: boolean;
}

export function LoginForm() {
	const form = useForm<LoginFormValues>({
		defaultValues: {
			email: "",
			password: "",
			rememberMe: false,
		},
	});

	const onSubmit = (data: LoginFormValues) => {
		console.log(data);
		// Handle login logic here
	};

	return (
		<div className="mx-auto w-full max-w-xl space-y-8">
			{/* Gradient Heading */}
			<div className="space-y-4 text-center">
				<h1
					className={cn(
						"bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600",
						"bg-clip-text text-transparent",
						"font-bold text-5xl tracking-tight md:text-6xl",
					)}
				>
					Welcome Back
				</h1>
				<p className="text-muted-foreground text-lg">Sign in to your account</p>
			</div>

			{/* Login Form */}
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					{/* Email Field */}
					<FormField
						control={form.control}
						name="email"
						rules={{
							required: "Email is required",
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: "Invalid email address",
							},
						}}
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-base">Email Address</FormLabel>
								<FormControl>
									<Input
										{...field}
										type="email"
										placeholder="Enter your email"
										className="h-14 rounded-xl bg-input/30 text-base"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Password Field */}
					<FormField
						control={form.control}
						name="password"
						rules={{
							required: "Password is required",
							minLength: {
								value: 6,
								message: "Password must be at least 6 characters",
							},
						}}
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-base">Password</FormLabel>
								<FormControl>
									<Input
										{...field}
										type="password"
										placeholder="Enter your password"
										className="h-14 rounded-xl bg-input/30 text-base"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Remember Me and Forgot Password */}
					<div className="flex items-center justify-between">
						<FormField
							control={form.control}
							name="rememberMe"
							render={({ field }) => (
								<FormItem className="flex items-center space-x-2 space-y-0">
									<FormControl>
										<Checkbox
											checked={field.value}
											onCheckedChange={field.onChange}
										/>
									</FormControl>
									<FormLabel className="font-normal text-base text-muted-foreground">
										Remember me
									</FormLabel>
								</FormItem>
							)}
						/>
						<Link
							href="/forgot-password"
							className="text-base text-blue-500 hover:text-blue-400 hover:underline"
						>
							Forgot password?
						</Link>
					</div>

					{/* Sign In Button with Gradient */}
					<Button
						type="submit"
						className={cn(
							"h-14 w-full rounded-xl text-base font-semibold",
							"bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600",
							"hover:from-cyan-500 hover:via-blue-600 hover:to-purple-700",
							"transition-all duration-300",
						)}
					>
						Sign In
					</Button>

					{/* Sign Up Link */}
					<p className="text-center text-base text-muted-foreground">
						Don't have an account?{" "}
						<Link
							href="/sign-up"
							className="text-blue-500 hover:text-blue-400 hover:underline"
						>
							Sign up
						</Link>
					</p>
				</form>
			</Form>
		</div>
	);
}

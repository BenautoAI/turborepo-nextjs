import { LoginForm } from "@/modules/auth/ui/components/login-form";

export default function CustomLoginPage() {
	return (
		<div className="flex min-h-screen w-full items-center justify-center bg-background px-4">
			<LoginForm />
		</div>
	);
}

import { EditProfileForm } from "../components/profile/EditProfileForm";
import { ChangePasswordForm } from "../components/profile/ChangePasswordForm";

export const ProfileRoute = () => {
  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <h1 className="text-2xl font-bold text-slate-900">Profile</h1>
      
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <EditProfileForm />
      </div>
      
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <ChangePasswordForm />
      </div>
    </div>
  );
};
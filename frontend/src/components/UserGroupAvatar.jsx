import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

export function UserGroupAvatar({ userGroupIcon, userGroupFallback }) {
  return (
    <Avatar className="w-14 h-14">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>{userGroupFallback}</AvatarFallback>
    </Avatar>
  );
}

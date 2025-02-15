"use client";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { UserGroupAvatar } from "./UserGroupAvatar";
import { useEffect, useState } from "react";

const GroupListItem = ({ title, splitCount, isLoadingn }) => {
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   let timer; // Store the timer ID

  //   if (isLoading) {
  //     // Only set a timeout if isLoading is true
  //     timer = setTimeout(() => {
  //       // No need to set isLoading here, it's controlled by the parent.
  //       setIsLoading(false);
  //     }, 400);
  //   }

  //   return () => clearTimeout(timer); // Clear the timer if the component unmounts or isLoading changes
  // }, [isLoading]); // Add isLoading to the dependency array

  return (
    <div className="flex items-center w-full h-20 px-4">
      {/* Group Avatar or Skeleton */}
      {isLoading ? (
        <Skeleton className="w-14 h-12 rounded-full" />
      ) : (
        <UserGroupAvatar />
      )}

      <div className="flex flex-row w-full justify-between">
        {/* Group Details or Skeleton */}
        <div className="ml-4">
          {isLoading ? (
            <>
              <Skeleton className="h-4 w-32 mb-2" />
              <Skeleton className="h-3 w-24" />
            </>
          ) : (
            <>
              <h3 className="text-lg font-semibold">{title ?? "Group 001"}</h3>
              <p className="text-gray-500 text-sm">
                {splitCount ?? 0} people splitting
              </p>
            </>
          )}
        </div>

        {/* Last activity time or Skeleton */}
        <div className="ml-4">
          {isLoading ? (
            <Skeleton className="h-3 w-20" />
          ) : (
            <p className="text-gray-500 text-sm">Yesterday</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GroupListItem;

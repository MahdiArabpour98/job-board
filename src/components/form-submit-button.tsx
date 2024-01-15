"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import LoadingButton from "@/components/loading-button";

const FormSubmitButton = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) => {
  const { pending } = useFormStatus();

  return <LoadingButton {...props} type="submit" loading={pending} />;
};

export default FormSubmitButton;

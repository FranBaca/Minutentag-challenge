import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function SearchBar() {
  return (
    <FormControl size={"md"}>
        <Input type='text' placeholder="Search burger, pizza, drink or ect..."/>
    </FormControl>
  )
}

import { useQuery } from '@tanstack/react-query'

export default function useFetchConfig() {
  return useQuery({
    queryFn: async () => {
      const data = await fetch("/config");
      const jsonData = data.json();
      return jsonData;
    },
    queryKey: ["configData"],
  });
}

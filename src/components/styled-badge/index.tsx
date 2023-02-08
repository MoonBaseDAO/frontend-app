import { Badge } from '@nextui-org/react';
interface StyledBadgeInterface {
  type: "approved" | "progress" | "waiting" | "review"
  label: string
}



const StyledBadge = ({type, label}: StyledBadgeInterface) => {
  
  const getBadgeColor = (type: string) => {
    switch(type) {
      case "approved": return "success"; 
      case "progress": return "primary";
      case "waiting": return "warning";
      case "review": return "error";
      default: return "error";
    }
  }

  return (
    <Badge color={getBadgeColor(type)} css={{textTransform: "uppercase"}}>{label}</Badge>
  )
}

export default StyledBadge;
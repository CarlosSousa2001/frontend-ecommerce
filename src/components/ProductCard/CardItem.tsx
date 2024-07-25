import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  photoUrl: string
}


export function CardItem({id, title, description, price, photoUrl}:ProductProps) {


  return (
    <Card className="max-h-[460px]">
        <CardHeader className="">
          <img src={photoUrl} alt={title} className="w-full h-64 object-cover" />
          <CardDescription className="mt-2 truncate ...">{title}</CardDescription>
        </CardHeader>
        <CardContent className="">
          <div>
            <span className="text-lg">{price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs">em 12x de</span>
            <span className="text-xs">{(price / 12).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>
          </div>
        </CardContent>

      <CardFooter className="">
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}

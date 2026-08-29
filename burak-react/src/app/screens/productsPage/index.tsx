import { Container, Typography, Box, Grid, Card, CardContent, Chip, Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export function ProductsPage() {
  const sampleProducts = [
    { id: 1, name: "Burak Special Kebab", price: 24.99, collection: "DISH", size: "LARGE", desc: "Signature tender marinated beef kebab with charred vegetables." },
    { id: 2, name: "Cheese Sizzling Burger", price: 16.50, collection: "DISH", size: "NORMAL", desc: "Juicy beef patty submerged in melted cheddar lava." },
    { id: 3, name: "Pistachio Turkish Baklava", price: 12.00, collection: "DESERT", size: "SET", desc: "Crispy handcrafted filo layers loaded with Gaziantep pistachios." },
    { id: 4, name: "Fresh Ayran Beverage", price: 4.50, collection: "DRINK", size: "1L", desc: "Traditional chilled salted yogurt drink." },
  ];

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 4, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <Typography variant="h3" sx={{ fontWeight: 800 }}>
              Restaurant Menu
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Browse our freshly crafted appetizers, main courses, and signature desserts.
            </Typography>
          </div>
        </Box>

        <Grid container spacing={3}>
          {sampleProducts.map((p) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={p.id}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <Box
                  sx={{
                    height: 180,
                    backgroundColor: "#1e293b",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#f59e0b",
                    fontSize: "2.5rem",
                  }}
                >
                  🥩
                </Box>
                <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                      <Chip label={p.collection} size="small" color="primary" variant="outlined" />
                      <Typography variant="caption" color="text.secondary">
                        {p.size}
                      </Typography>
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                      {p.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {p.desc}
                    </Typography>
                  </div>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: "primary.dark" }}>
                      ${p.price.toFixed(2)}
                    </Typography>
                    <Button variant="contained" color="primary" size="small" startIcon={<AddShoppingCartIcon />}>
                      Add
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
